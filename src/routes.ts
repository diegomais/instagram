import { Request, Response } from 'express';

import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'diego@gmail.com',
    password: '123456',
    techs: [
      'Node,js',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', experience: 100 },
      { title: 'TypeScript', experience: 20 }
    ]
  });

  return response.json(user);
};
