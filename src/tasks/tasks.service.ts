import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(taskId: string): Task {
        return this.tasks.find( task => task.id === taskId);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description,} = createTaskDto;

        const task: Task = {
            id: uuid.v1(),
            title,
            description,
            status: TaskStatus.OPEN,
        }

        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string): void {
        const taskIdx = this.tasks.findIndex(task => task.id === id);
        this.tasks.splice(taskIdx, 1);
    }

    updateStatus(id: string, status: TaskStatus): Task {
        this.getTaskById(id);

        this.tasks.s
    }
}
 