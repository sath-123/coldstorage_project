import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ColdStorageData {
  readonly id: string;
  readonly eventDateTime: string;
  readonly unique_deviceID: string;
  readonly batteryVoltage?: string;
  readonly waterInletTemp?: string;
  readonly ambientTemp?: string;
  readonly coldStorageTemp?: string;
  readonly ambientHumid?: string;
  readonly thermalBatteryTemp?: string;
  readonly dewPointTemp?: string;
  readonly powerSwitchStatus?: number;
  readonly doorSensorStatus?: number;
  readonly onexRelayStatus?: number;
  readonly twoxRelayStatus?: number;
  readonly threexRelayStatus?: number;
  readonly fourxRelayStatus?: number;
  readonly fivexRelayStatus?: number;
  readonly sixxRelayStatus?: number;
  readonly sevenxRelayStatus?: number;
  readonly eightxRelayStatus?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ColdStorageData>);
  static copyOf(source: ColdStorageData, mutator: (draft: MutableModel<ColdStorageData>) => MutableModel<ColdStorageData> | void): ColdStorageData;
}

export declare class ColdStorageID {
  readonly id: string;
  readonly coldstorage_id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ColdStorageID>);
  static copyOf(source: ColdStorageID, mutator: (draft: MutableModel<ColdStorageID>) => MutableModel<ColdStorageID> | void): ColdStorageID;
}