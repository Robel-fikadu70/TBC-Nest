import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Controller('tasks') 
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
    getTaskbyID(@Param('id', ParseIntPipe) id: number){
        return this.taskService.getTaskbyID(id)
    }

    @Post()
    createTask(@Body(ValidationPipe) task: CreateTaskDTO){
        return this.taskService.createTask(task)
    }

    @Patch(':id')
    updateTask(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) taskUpdate: UpdateTaskDTO){
        return this.taskService.updateTask(id, taskUpdate)
    }

    @Delete(':id')
    deleteTask(@Param('id', ParseIntPipe) id: number){
        return this.taskService.deleteTask(id)
    }




    
}
