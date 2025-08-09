import React, { useContext, useState, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../TaskContext";
import { Alert, Button, Input, ListGroup, ListGroupItem } from "reactstrap";
import alertify from "alertifyjs";

function TaskDetail(){
    const {taskId} = useParams();

    const {taskList, setTaskList} = useContext(TaskContext);
    const [updateTask, setUpdateTask] = useState('');
    const task = taskList[taskId];
    const navigate = useNavigate();
    if(!task){
        return <Alert color="danger">Görev Bulunmadı</Alert>
    }
    const handleUpdateTask = () =>{
        if(updateTask.trim() === ''){
            alertify.error("Görev adı boş olamaz!");
            return;
        }
        const newTaskList = [...taskList];
        newTaskList[taskId] = setTaskList;
        alertify.success("Görev Başarıyla Güncellendi!")
        setUpdateTask('');
    }

    const handleDeleteTask = () =>{
        const newTaskList = taskList.filter((_, index) => index !== parseInt(taskId));
        setTaskList(newTaskList);
        alertify.success("Görev Başarıyla Silindi!");
        navigate('/');
    }
    return(
        <div className="container mt-4">
            <h1>Görev Detayı</h1>
            <ListGroup>
                <ListGroupItem><strong>Görev:</strong>{task}</ListGroupItem>
            </ListGroup>
            <div className="mt-4">
                <Input
                type="text"
                value={updateTask}
                onChange={(e) => setUpdateTask(e.target.value)} className="mb-2"></Input>
                <Button color="primary" onClick={handleUpdateTask}>Güncelle</Button>
                <Button color="danger" onClick={handleDeleteTask}>
                    Sil</Button>
            </div>
        </div>
    );
}
export default TaskDetail;