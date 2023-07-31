import {  DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
    .setTitle("Doctor's Office API ")
    .setDescription("API for a Doctor's Office Management System.")
    .setVersion('1.0')
    .addTag('Office Management')
    .addBearerAuth()
    .build();