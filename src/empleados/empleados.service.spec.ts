import { Test, TestingModule } from '@nestjs/testing';
import { employeesService } from './empleados.service';

describe('employeesService', () => {
  let service: employeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [employeesService],
    }).compile();

    service = module.get<employeesService>(employeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
