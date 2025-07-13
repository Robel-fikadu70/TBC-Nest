import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
    private tasks = [
        {
            "id": 1,
            "title": "Task One",
            "description": "Clean Room",
            "status": "DONE"
        },
        {
            "id": 2,
            "title": "Task Two",
            "description": "Finish the project",
            "status": "IN-PROGRESS"
        },
        {
            "id": 3,
            "title": "Task Three",
            "description": "Visit Granny",
            "status": "PENDING"
        },
        {
            "id": 4,
            "title": "Task Four",
            "description": "Buy Groceries",
            "status": "PENDING"
        }
    ]
    private taskCount = 5;

    getAllTasks(status?: "PENDING" | "IN-PROGRESS" | "DONE"){
        if(status){
            return this.tasks.filter(task => task.status === status)
        }

        return this.tasks
    }

    getTaskbyID(id: number){
        const user = this.tasks.find(user => user.id === id)
        if(!user) throw new NotFoundException("User Not Found!")
        return user
    }

    createTask(task: {title: string, description: string}){
        const id = this.taskCount++;

        const newTask = {
            "id" : id,
            "title": task.title,
            "description": task.description,
            "status": "PENDING"
        }

        this.tasks.push(newTask)
        return newTask
    }

    updateTask(id: number, taskUpdate: {title?: string, description?: string, status?: 'PENDING' | 'IN-PROGRESS' | 'DONE'}){
        this.tasks = this.tasks.map(task => {
            if(task.id === id) {return {...task, ...taskUpdate}}
            return task
        })

        return this.getTaskbyID(id);

    }

    deleteTask(id: number){
        const taskToDelete = this.getTaskbyID(id)
        
        this.tasks = this.tasks.filter(task => task.id !== id)

        return taskToDelete
    }



}
