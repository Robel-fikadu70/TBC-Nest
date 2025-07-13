import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks') // /task
export class TaskController {
    constructor(private readonly taskService: TaskService){}
    /* 
    GET /tasks       CHECK
    GET /tasks/:id   CHECK
    POST /tasks      CHECK     
    PATCH /tasks/:id CHECK
    DELETE /tsks/:id CKECK
    */


    
    @Get()  // /task or /task?status=value 
    getAllTasks(@Query('status') status?: 'PENDING' | 'IN-PROGRESS' | 'DONE') {
        return this.taskService.getAllTasks(status);
    }

    @Get(':id')
    getTaskbyID(@Param('id') id: string){
        return this.taskService.getTaskbyID(+id)
    }

    @Post()
    createTask(@Body() task: {title: string, description: string}){
        return this.taskService.createTask(task)
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() taskUpdate: {title?: string, description?: string, status?: 'PENDING' | 'IN-PROGRESS' | 'DONE'}){
        return this.taskService.updateTask(+id, taskUpdate)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        return this.taskService.deleteTask(+id)
    }




    
}
