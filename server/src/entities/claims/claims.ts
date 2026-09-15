//append_imports_start

import { PrimaryColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('claims')
export class claims {
  @PrimaryColumn({ name: 'claim_id' })
  claim_id: string;
  @Column({ name: 'policy_no', nullable: false, type: 'text', primary: false })
  policy_no: string;
  @Column({
    name: 'date_of_loss',
    nullable: true,
    precision: 6,
    type: 'timestamp with time zone',
    primary: false,
  })
  date_of_loss: Date;
  @Column({
    name: 'intimated_at',
    nullable: true,
    precision: 6,
    type: 'timestamp with time zone',
    primary: false,
  })
  intimated_at: Date;
  @Column({ name: 'loss_code', nullable: true, type: 'text', primary: false })
  loss_code: string;
  @Column({
    name: 'part_group_code',
    nullable: true,
    type: 'text',
    primary: false,
  })
  part_group_code: string;
  @Column({
    name: 'estimated_parts_cost',
    nullable: true,
    type: 'bigint',
    primary: false,
  })
  estimated_parts_cost: number;
  @Column({ name: 'garage_type', nullable: true, type: 'text', primary: false })
  garage_type: string;
  @Column({
    name: 'fir_filed',
    nullable: true,
    type: 'boolean',
    primary: false,
  })
  fir_filed: boolean;
  @Column({
    name: 'valid_licence',
    nullable: true,
    type: 'boolean',
    primary: false,
  })
  valid_licence: boolean;
  @Column({
    name: 'loss_description',
    nullable: true,
    type: 'text',
    primary: false,
  })
  loss_description: string;
  @Column({
    name: 'depreciated_parts',
    nullable: true,
    type: 'bigint',
    primary: false,
  })
  depreciated_parts: number;
  @Column({
    name: 'labour_cost',
    nullable: true,
    type: 'bigint',
    primary: false,
  })
  labour_cost: number;
  @Column({
    name: 'gross_assessed',
    nullable: true,
    type: 'bigint',
    primary: false,
  })
  gross_assessed: number;
  @Column({
    name: 'system_net_payable',
    nullable: true,
    type: 'bigint',
    primary: false,
  })
  system_net_payable: number;
  @Column({
    name: 'surveyor_net_payable',
    nullable: true,
    type: 'bigint',
    primary: false,
  })
  surveyor_net_payable: number;
  @Column({
    name: 'deduction_trace',
    nullable: true,
    type: 'text',
    primary: false,
  })
  deduction_trace: string;
  @Column({
    name: 'surveyor_remarks',
    nullable: true,
    type: 'text',
    primary: false,
  })
  surveyor_remarks: string;
  @Column({
    name: 'manager_remarks',
    nullable: true,
    type: 'text',
    primary: false,
  })
  manager_remarks: string;
  @Column({
    name: 'settlement_ref',
    nullable: true,
    type: 'text',
    primary: false,
  })
  settlement_ref: string;
  @Column({ name: 'status', nullable: true, type: 'text', primary: false })
  status: string;
  @Column({
    name: 'created_at',
    nullable: true,
    precision: 6,
    type: 'timestamp with time zone',
    primary: false,
  })
  created_at: Date;
  @Column({
    name: 'updated_at',
    nullable: true,
    precision: 6,
    type: 'timestamp with time zone',
    primary: false,
  })
  updated_at: Date;
}
