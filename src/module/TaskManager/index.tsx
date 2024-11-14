import { Caixa, CampFilterTask, CheckTask, Container, ContainerTask, DeleteTask, EditTask, FilterTask, NewTask, SearchTask, SubContainer, TextTask, Title } from "./styles"
import { Fab, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import CheckBox from '@mui/material/Checkbox';

interface Task {
  title: string;
  completed: boolean;
  user: string; 
}

interface TaskManagerProps {
  userName: string; // Nome do usuário logado
}

export const TaskManager = ({ userName }: TaskManagerProps) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);   
    const [editTask, setEditTask] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [showCompleted, setShowCompleted] = useState<boolean | null>(null); // Filtro de status

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // Funções de alteração de valor
    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleEditTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTask(e.target.value);
    };

    // Adiciona uma nova tarefa
    const handleAddTask = () => {
        if (task.trim()) {
            const newTask: Task = { 
                title: task, 
                completed: false, 
                user: userName // A tarefa leva o nome do usuário logado
            }; 
            setTasks([...tasks, newTask]);
            setTask(''); // Limpa o campo
        }
    };

    // Edita a tarefa selecionada
    const handleEditTask = (index: number) => {
        setEditIndex(index);
        setEditTask(tasks[index].title); // Traz o valor atual da tarefa
    };

    const saveEditTask = (index: number) => {
        if (editTask.trim()) {
            const updatedTasks = [...tasks];
            updatedTasks[index].title = editTask;
            setTasks(updatedTasks);
            setEditIndex(null); // Finaliza a edição
            setEditTask('');
        }
    };

    // Remove a tarefa
    const handleDeleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    // Alterna o status de completada
    const toggleCompleted = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    // Função de filtro por título e status
    const filteredTasks = tasks.filter(task => {
        const matchesTitle = task.title.toLowerCase().includes(searchTitle.toLowerCase());
        const matchesStatus = showCompleted === null || task.completed === showCompleted;
        return matchesTitle && matchesStatus;
    });

    return (
        <Container>
            <Caixa>
                <Title>Gerenciador de Tarefas</Title>

                {/* Parágrafo exibindo o nome do usuário logado */}
                <p>Usuário logado: {userName}</p>

                {/* Campo para nova tarefa */}
                <NewTask 
                    type="text" 
                    label="Nova Tarefa" 
                    value={task} 
                    onChange={handleTaskChange} 
                />
                <Fab color="primary" aria-label="add" onClick={handleAddTask} style={{ marginLeft: '10px' }}>
                    <AddIcon />
                </Fab>

                {/* Filtros de busca */}
                <CampFilterTask>
                    <SearchTask
                        label="Buscar por título"
                        variant="outlined"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                    <FilterTask
                        select
                        value={showCompleted !== null ? (showCompleted ? 'completed' : 'not_completed') : ''}
                        onChange={(e) => {
                            if (e.target.value === 'completed') setShowCompleted(true);
                            else if (e.target.value === 'not_completed') setShowCompleted(false);
                            else setShowCompleted(null);
                        }}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option value="">Todos</option>
                        <option value="completed">Concluídas</option>
                        <option value="not_completed">Não concluídas</option>
                    </FilterTask>
                </CampFilterTask>

                {/* Lista de tarefas */}
                <SubContainer>
                    {filteredTasks.map((t, index) => (
                        <ContainerTask key={index}>
                            {editIndex === index ? (
                                // Modo de edição
                                <>
                                    <NewTask
                                        type="text"
                                        value={editTask}
                                        onChange={handleEditTaskChange}
                                    />
                                    <CheckTask onClick={() => saveEditTask(index)} />
                                </>
                            ) : (
                                // Exibição normal
                                <>
                                    <TextTask>{t.title} - {t.user}</TextTask>
                                    <EditTask onClick={() => handleEditTask(index)} />
                                </>
                            )}
                            <DeleteTask onClick={() => handleDeleteTask(index)} />
                            <CheckBox
                                {...label}
                                checked={t.completed}
                                onChange={() => toggleCompleted(index)}
                            />
                        </ContainerTask>
                    ))}
                </SubContainer>
            </Caixa>
        </Container>
    );
};
