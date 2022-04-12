/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBatteryVoltageData = /* GraphQL */ `
  query GetBatteryVoltageData($id: ID!) {
    getBatteryVoltageData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      batteryVoltage
      createdAt
      updatedAt
    }
  }
`;
export const listBatteryVoltageData = /* GraphQL */ `
  query ListBatteryVoltageData(
    $filter: ModelBatteryVoltageDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBatteryVoltageData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        batteryVoltage
      }
      nextToken
    }
  }
`;
export const batteryVoltageDataByDate = /* GraphQL */ `
  query BatteryVoltageDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBatteryVoltageDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BatteryVoltageDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        batteryVoltage
      }
      nextToken
    }
  }
`;
export const getWaterInletTempData = /* GraphQL */ `
  query GetWaterInletTempData($id: ID!) {
    getWaterInletTempData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      waterInletTemp
      createdAt
      updatedAt
    }
  }
`;
export const listWaterInletTempData = /* GraphQL */ `
  query ListWaterInletTempData(
    $filter: ModelWaterInletTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWaterInletTempData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        waterInletTemp
      }
      nextToken
    }
  }
`;
export const waterInletTempDataByDate = /* GraphQL */ `
  query WaterInletTempDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWaterInletTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    WaterInletTempDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        waterInletTemp
      }
      nextToken
    }
  }
`;
export const getAmbientTempData = /* GraphQL */ `
  query GetAmbientTempData($id: ID!) {
    getAmbientTempData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      ambientTemp
      createdAt
      updatedAt
    }
  }
`;
export const listAmbientTempData = /* GraphQL */ `
  query ListAmbientTempData(
    $filter: ModelAmbientTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmbientTempData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventDateTime
        unique_deviceID
        ambientTemp
      }
      nextToken
    }
  }
`;
export const ambientTempDataByDate = /* GraphQL */ `
  query AmbientTempDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAmbientTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AmbientTempDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        ambientTemp
      }
      nextToken
    }
  }
`;
export const getColdStorageTempData = /* GraphQL */ `
  query GetColdStorageTempData($id: ID!) {
    getColdStorageTempData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      coldStorageTemp
      createdAt
      updatedAt
    }
  }
`;
export const listColdStorageTempData = /* GraphQL */ `
  query ListColdStorageTempData(
    $filter: ModelColdStorageTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColdStorageTempData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        coldStorageTemp
      }
      nextToken
    }
  }
`;
export const coldStorageTempDataByDate = /* GraphQL */ `
  query ColdStorageTempDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelColdStorageTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ColdStorageTempDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        coldStorageTemp
      }
      nextToken
    }
  }
`;
export const getAmbientHumidData = /* GraphQL */ `
  query GetAmbientHumidData($id: ID!) {
    getAmbientHumidData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      ambientHumid
      createdAt
      updatedAt
    }
  }
`;
export const listAmbientHumidData = /* GraphQL */ `
  query ListAmbientHumidData(
    $filter: ModelAmbientHumidDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmbientHumidData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        ambientHumid
      }
      nextToken
    }
  }
`;
export const ambientHumidDataByDate = /* GraphQL */ `
  query AmbientHumidDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAmbientHumidDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AmbientHumidDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        ambientHumid
      }
      nextToken
    }
  }
`;
export const getThermalBatteryTempData = /* GraphQL */ `
  query GetThermalBatteryTempData($id: ID!) {
    getThermalBatteryTempData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      thermalBatteryTemp
      createdAt
      updatedAt
    }
  }
`;
export const listThermalBatteryTempData = /* GraphQL */ `
  query ListThermalBatteryTempData(
    $filter: ModelThermalBatteryTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThermalBatteryTempData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        thermalBatteryTemp
      }
      nextToken
    }
  }
`;
export const thermalBatteryTempDataByDate = /* GraphQL */ `
  query ThermalBatteryTempDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelThermalBatteryTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ThermalBatteryTempDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        thermalBatteryTemp
      }
      nextToken
    }
  }
`;
export const getDewPointTempData = /* GraphQL */ `
  query GetDewPointTempData($id: ID!) {
    getDewPointTempData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      dewPointTemp
      createdAt
      updatedAt
    }
  }
`;
export const listDewPointTempData = /* GraphQL */ `
  query ListDewPointTempData(
    $filter: ModelDewPointTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDewPointTempData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        dewPointTemp
      }
      nextToken
    }
  }
`;
export const dewPointTempDataByDate = /* GraphQL */ `
  query DewPointTempDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDewPointTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    DewPointTempDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        dewPointTemp
      }
      nextToken
    }
  }
`;
export const getWetBulbTempData = /* GraphQL */ `
  query GetWetBulbTempData($id: ID!) {
    getWetBulbTempData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      wetBulbTemp
      createdAt
      updatedAt
    }
  }
`;
export const listWetBulbTempData = /* GraphQL */ `
  query ListWetBulbTempData(
    $filter: ModelWetBulbTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWetBulbTempData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventDateTime
        unique_deviceID
        wetBulbTemp
      }
      nextToken
    }
  }
`;
export const wetBulbTempDataByDate = /* GraphQL */ `
  query WetBulbTempDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWetBulbTempDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    WetBulbTempDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        wetBulbTemp
      }
      nextToken
    }
  }
`;
export const getPowerSwitchStatusData = /* GraphQL */ `
  query GetPowerSwitchStatusData($id: ID!) {
    getPowerSwitchStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      powerSwitchStatus
      createdAt
      updatedAt
    }
  }
`;
export const listPowerSwitchStatusData = /* GraphQL */ `
  query ListPowerSwitchStatusData(
    $filter: ModelPowerSwitchStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPowerSwitchStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        powerSwitchStatus
      }
      nextToken
    }
  }
`;
export const powerSwitchStatusDataByDate = /* GraphQL */ `
  query PowerSwitchStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPowerSwitchStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PowerSwitchStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        powerSwitchStatus
      }
      nextToken
    }
  }
`;
export const getDoorSensorStatusData = /* GraphQL */ `
  query GetDoorSensorStatusData($id: ID!) {
    getDoorSensorStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      doorSensorStatus
      createdAt
      updatedAt
    }
  }
`;
export const listDoorSensorStatusData = /* GraphQL */ `
  query ListDoorSensorStatusData(
    $filter: ModelDoorSensorStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoorSensorStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        doorSensorStatus
      }
      nextToken
    }
  }
`;
export const doorSensorStatusDataByDate = /* GraphQL */ `
  query DoorSensorStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDoorSensorStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    DoorSensorStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        doorSensorStatus
      }
      nextToken
    }
  }
`;
export const getOnexRelayStatusData = /* GraphQL */ `
  query GetOnexRelayStatusData($id: ID!) {
    getOnexRelayStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      onexRelayStatus
      createdAt
      updatedAt
    }
  }
`;
export const listOnexRelayStatusData = /* GraphQL */ `
  query ListOnexRelayStatusData(
    $filter: ModelOnexRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOnexRelayStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        onexRelayStatus
      }
      nextToken
    }
  }
`;
export const onexRelayStatusDataByDate = /* GraphQL */ `
  query OnexRelayStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOnexRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    OnexRelayStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        onexRelayStatus
      }
      nextToken
    }
  }
`;
export const getTwoxRelayStatusData = /* GraphQL */ `
  query GetTwoxRelayStatusData($id: ID!) {
    getTwoxRelayStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      twoxRelayStatus
      createdAt
      updatedAt
    }
  }
`;
export const listTwoxRelayStatusData = /* GraphQL */ `
  query ListTwoxRelayStatusData(
    $filter: ModelTwoxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTwoxRelayStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        twoxRelayStatus
      }
      nextToken
    }
  }
`;
export const twoxRelayStatusDataByDate = /* GraphQL */ `
  query TwoxRelayStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTwoxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TwoxRelayStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        twoxRelayStatus
      }
      nextToken
    }
  }
`;
export const getThreexRelayStatusData = /* GraphQL */ `
  query GetThreexRelayStatusData($id: ID!) {
    getThreexRelayStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      threexRelayStatus
      createdAt
      updatedAt
    }
  }
`;
export const listThreexRelayStatusData = /* GraphQL */ `
  query ListThreexRelayStatusData(
    $filter: ModelThreexRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThreexRelayStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        threexRelayStatus
      }
      nextToken
    }
  }
`;
export const threexRelayStatusDataByDate = /* GraphQL */ `
  query ThreexRelayStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelThreexRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ThreexRelayStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        threexRelayStatus
      }
      nextToken
    }
  }
`;
export const getFourxRelayStatusData = /* GraphQL */ `
  query GetFourxRelayStatusData($id: ID!) {
    getFourxRelayStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      fourxRelayStatus
      createdAt
      updatedAt
    }
  }
`;
export const listFourxRelayStatusData = /* GraphQL */ `
  query ListFourxRelayStatusData(
    $filter: ModelFourxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFourxRelayStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        fourxRelayStatus
      }
      nextToken
    }
  }
`;
export const fourxRelayStatusDataByDate = /* GraphQL */ `
  query FourxRelayStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFourxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    FourxRelayStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        fourxRelayStatus
      }
      nextToken
    }
  }
`;
export const getFivexRelayStatusData = /* GraphQL */ `
  query GetFivexRelayStatusData($id: ID!) {
    getFivexRelayStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      fivexRelayStatus
      createdAt
      updatedAt
    }
  }
`;
export const listFivexRelayStatusData = /* GraphQL */ `
  query ListFivexRelayStatusData(
    $filter: ModelFivexRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFivexRelayStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        fivexRelayStatus
      }
      nextToken
    }
  }
`;
export const fivexRelayStatusDataByDate = /* GraphQL */ `
  query FivexRelayStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFivexRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    FivexRelayStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        fivexRelayStatus
      }
      nextToken
    }
  }
`;
export const getSixxRelayStatusData = /* GraphQL */ `
  query GetSixxRelayStatusData($id: ID!) {
    getSixxRelayStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      sixxRelayStatus
      createdAt
      updatedAt
    }
  }
`;
export const listSixxRelayStatusData = /* GraphQL */ `
  query ListSixxRelayStatusData(
    $filter: ModelSixxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSixxRelayStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        sixxRelayStatus
      }
      nextToken
    }
  }
`;
export const sixxRelayStatusDataByDate = /* GraphQL */ `
  query SixxRelayStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSixxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SixxRelayStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        sixxRelayStatus
      }
      nextToken
    }
  }
`;
export const getSevenxRelayStatusData = /* GraphQL */ `
  query GetSevenxRelayStatusData($id: ID!) {
    getSevenxRelayStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      sevenxRelayStatus
      createdAt
      updatedAt
    }
  }
`;
export const listSevenxRelayStatusData = /* GraphQL */ `
  query ListSevenxRelayStatusData(
    $filter: ModelSevenxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSevenxRelayStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        sevenxRelayStatus
      }
      nextToken
    }
  }
`;
export const sevenxRelayStatusDataByDate = /* GraphQL */ `
  query SevenxRelayStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSevenxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SevenxRelayStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        sevenxRelayStatus
      }
      nextToken
    }
  }
`;
export const getEightxRelayStatusData = /* GraphQL */ `
  query GetEightxRelayStatusData($id: ID!) {
    getEightxRelayStatusData(id: $id) {
      id
      eventDateTime
      unique_deviceID
      eightxRelayStatus
      createdAt
      updatedAt
    }
  }
`;
export const listEightxRelayStatusData = /* GraphQL */ `
  query ListEightxRelayStatusData(
    $filter: ModelEightxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEightxRelayStatusData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        eightxRelayStatus
      }
      nextToken
    }
  }
`;
export const eightxRelayStatusDataByDate = /* GraphQL */ `
  query EightxRelayStatusDataByDate(
    $unique_deviceID: String
    $eventDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEightxRelayStatusDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EightxRelayStatusDataByDate(
      unique_deviceID: $unique_deviceID
      eventDateTime: $eventDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventDateTime
        unique_deviceID
        eightxRelayStatus
      }
      nextToken
    }
  }
`;
export const getColdStorageID = /* GraphQL */ `
  query GetColdStorageID($id: ID!) {
    getColdStorageID(id: $id) {
      id
      coldstorage_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listColdStorageIDS = /* GraphQL */ `
  query ListColdStorageIDS(
    $filter: ModelColdStorageIDFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColdStorageIDS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coldstorage_id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;