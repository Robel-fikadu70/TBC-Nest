import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Controller('tasks') 
export class TaskController {
    constructor(private readonly taskService: TaskService){}
    /* 
    GET /tasks       
    GET /tasks/:id   
    POST /tasks           
    PATCH /tasks/:id 
    DELETE /tsks/:id 
    */

    // @Get()  // /task or /task?status=value 
    // getAllTasks(@Query('status') status?: 'PENDING' | 'IN-PROGRESS' | 'DONE') {
    //     return this.taskService.getAllTasks(status);
    // }
    @Get()
    getAllTasks(@Query('status') status?: string[] | string) {
    const statuses = Array.isArray(status) ? status : status ? [status] : undefined;
    return this.taskService.getAllTasks(statuses);
    }


    @Get(':id')
    getTaskbyID(@Param('id', ParseIntPipe) id: number){
        return this.taskService.getTaskbyID(id)
    }

    @Post()
    @HttpCode(201)
    createTask(@Body(ValidationPipe) task: CreateTaskDTO){
        return this.taskService.createTask(task)
    }

    @Patch(':id')
    updateTask(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) taskUpdate: UpdateTaskDTO){
        return this.taskService.updateTask(id, taskUpdate)
    }

    @Delete(':id')
    @HttpCode(204)
    deleteTask(@Param('id', ParseIntPipe) id: number){
        return this.taskService.deleteTask(id)
    }




    
}
