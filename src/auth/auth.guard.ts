import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || authHeader !== 'Basic a2hhdGVlYjpraGF0ZWVi') {
      throw new UnauthorizedException('Invalid authentication');
    }

    return true;
  }
}
