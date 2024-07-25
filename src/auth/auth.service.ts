import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';

const fakeUsers = [
  {
    id: 1,
    username: 'gutz',
    password: 'password',
  },
  {
    id: 2,
    username: 'jack',
    password: 'password',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const userFound = fakeUsers.find((user) => user.username === username);
    if (!userFound) return null;
    if (password === userFound.password) {
      const { password, ...user } = userFound;
      return this.jwtService.sign(user);
    }
  }
}
