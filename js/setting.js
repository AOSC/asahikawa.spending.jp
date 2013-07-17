/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'budget_asahikawa_2013';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* asahikawa cofog */
  // 1 議会費
  '1': { icon: 'icons/asahikawa_logo.svg', color: '#C75746', bcolor: '#0AB971' },
  '100': { icon: 'icons/asahikawa_logo.svg', color: '#C75746', bcolor: '#0AB971' },
  // 2 総務費
  '2': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' },
  '101': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' },
  '102': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#0AB971' },
  '103': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },
  '104': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#0AB971' },
  '105': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#0AB971' },
  '106': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  // 3 民生費
  '3': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#4E6D00' },
  '107': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#4E6D00' },
  '108': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#4E6D00' },
  '109': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#4E6D00' },
  '110': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#4E6D00' },
  // 4 衛生費
  '4': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '111': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '112': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#D33673' },
  '113': { icon: 'icons/water.svg', color: '#C75746', bcolor: '#D33673' },
  '114': { icon: 'icons/toilet.svg', color: '#C75746', bcolor: '#D33673' },
  '115': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#D33673' },
  // 5 労働費
  '5': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#2A3A03' },
  '116': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#2A3A03' },
  // 6 農林水産費
  '6': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' },
  '117': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '118': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' },
  // 7 商工費
  '7': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },
  '119': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },
  // 8 土木費
  '8': { icon: 'icons/snow.svg', color: '#C75746', bcolor: '#C75746' },
  '120': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '121': { icon: 'icons/snow.svg', color: '#C75746', bcolor: '#C75746' },
  '122': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#C75746' },
  '123': { icon: 'icons/airplane.svg', color: '#C75746', bcolor: '#C75746' },
  '124': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#C75746' },
  '125': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },
  // 9 消防費
  '9': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#D33673' },
  '126': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#D33673' },
  // 10 教育費
  '10': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' },
  '127': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' },
  '128': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#D33673' },
  '129': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#D33673' },
  '130': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#D33673' },
  '131': { icon: 'icons/post-secondary.svg', color: '#C75746', bcolor: '#D33673' },
  '132': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#D33673' },
  '133': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#D33673' },
  '134': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#D33673' },
  // 11 災害復旧費 
  '11': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#790586' },
  '135': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#790586' },
  // 12 公債費
  '12': { icon: 'icons/debt-asahikawa.svg', color: '#C75746', bcolor: '#790586' },
  '136': { icon: 'icons/debt-asahikawa.svg', color: '#C75746', bcolor: '#790586' },
  // 13 職員費
  '13': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#790586' },
  '137': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#790586' },
  // 14 予備費
  '14': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  '138': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' }
};
