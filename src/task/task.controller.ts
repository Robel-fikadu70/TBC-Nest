import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('tasks') // /task
export class TaskController {
    /* 
    GET /tasks       CHECK
    GET /tasks/:id   CHECK
    POST /tasks      CHECK     
    PATCH /tasks/:id CHECK
    DELETE /tsks/:id CKECK
    */


    
    @Get()  // /task or /task?status=value 
    getAllTasks(@Query('status') status?: 'PENDING' | 'IN-PROGRESS' | 'DONE') {
        return []
    }

    @Get(':id')
    getOneTask(@Param('id') id: string){
        return { id }
    }

    @Post()
    createTask(@Body() task: {}){
        return task
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() taskUpdate: {}){
        return {id, ...taskUpdate}
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        return []
    }




    
}
