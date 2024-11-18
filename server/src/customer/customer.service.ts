import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer, customerStatus } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) { }

  // [ADMIN, TEAM_LEADER, TEAM_WORKER] ACCESS
  async createCustomer(customer: CreateCustomerDto, user: User) {
    try {
      const newCustomer = this.customersRepository.create({ ...customer, dealer: user });
      return await this.customersRepository.save(newCustomer);
    } catch (error) {
      throw new Error('Failed to create customer: ' + error.message);
    }
  }

  // ADMIN ACCESS
  async getAllCustomersOrQuery(team_id: number, leader_id: number, dealer_id: number, province: string, district: string, sub_district: string) {

    try {
      return await this.customersRepository.find({
        where: {
          ...(team_id && {
            dealer: {
              team: {
                id: team_id
              }
            }
          }),
          ...(leader_id && {
            dealer: {
              team: {
                leader: {
                  id: leader_id
                }
              }
            }
          }),
          ...(dealer_id && {
            dealer: {
              id: dealer_id
            }
          }),
          ...(province && {
            province: province
          }),
          ...(district && {
            district: district
          }),
          ...(sub_district && {
            province: sub_district
          })
        }
      })
    }
    catch (error) {
      throw new Error('Failed to fetch customers. Please try again later.');
    }

    // if (team_id && !leader_id && !dealer_id) {
    //   return await this.customersRepository.find({
    //     where: {
    //       dealer: {
    //         team: {
    //           id: team_id
    //         }
    //       }
    //     },
    //     relations: ['dealer']
    //   });
    // }

    // else if (leader_id && !team_id && !dealer_id) {
    //   return await this.customersRepository.find({
    //     where: {
    //       dealer: {
    //         team: {
    //           leader: {
    //             id: leader_id
    //           }
    //         }
    //       }
    //     },
    //     relations: ['dealer']
    //   });
    // }

    // else if (dealer_id && !team_id && !leader_id) {
    //   return await this.customersRepository.find({
    //     where: {
    //       dealer: {
    //         id: dealer_id
    //       }
    //     },
    //     relations: ['dealer']
    //   });
    // }
    // else {
    //   return await
    //     this.customersRepository.find({ relations: ['dealer'] });
    // }

  }





  // TEAM_LEADER ACCESS
  async getAllCurrentTeamLeaderUserCustomersOrQuery(user: User, dealer_id: number, province: string, district: string, sub_district: string) {
    const query = {
      where: {
        dealer: {
          team: {
            leader: {
              id: user.id
            }
          }
        },
        ...(dealer_id && { id: dealer_id }),
        ...(province && { province }),
        ...(district && { district }),
        ...(sub_district && { sub_district })
      },
      relations: ['dealer']
    };
    return await this.customersRepository.find(query);
  }



  // TEAM_WORKER ACCESS
  async getAllCurrentTeamWorkerUserCustomersOrQuery(user: User, id_card: string, province: string, district: string, sub_district: string) {

    return (id_card
      ?
      await this.customersRepository.find({
        where: {
          identification_number: id_card
        },
        relations: ['dealer']
      })
      :
      await this.customersRepository.find({
        where: {
          dealer: {
            id: user.id
          },
          ...(province && { province }),
          ...(district && { district }),
          ...(sub_district && { sub_district })
        },
        relations: ['dealer']
      })
    )
  }

  async updateCustomerStatusById(customerId: number, status: customerStatus) {
    // return { customerId, status };
    try {
      const customerStatus = await this.customersRepository.findOne({ where: { id: customerId } });
      customerStatus.status = status;
      return await this.customersRepository.save(customerStatus);
    }
    catch (error) {
      throw new Error('Failed to create team: ' + error.message);
    }

  }
}
