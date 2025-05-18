import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma,Status } from '@prisma/client';



@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  create(data: Prisma.TaskCreateInput) {
    return this.prisma.task.create({ data });
  }

  update(id: number, data: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }

  findByStatus(status: string) {
    return this.prisma.task.findMany({
      where: {
        status: status.toUpperCase() as any, 
         },
    });
  }
}
