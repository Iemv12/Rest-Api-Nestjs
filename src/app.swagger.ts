import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {INestApplication} from '@nestjs/common';

export const initSwagger = (app:INestApplication) => {
    const swaggerConfid = new DocumentBuilder()
        .setTitle("The RestFul Animals Api")
        .addBearerAuth()
        .setDescription("Its a api create with the Framework NestJS")
        .build();

        const document = SwaggerModule.createDocument(app,swaggerConfid);
        SwaggerModule.setup('/docs',app,document);
};