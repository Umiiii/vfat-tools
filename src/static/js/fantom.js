$(function () {
  main()
})

const main = async () => {
  let tableData = {
    title: 'FANTOM Network',
    heading: ['Pool Provider', 'LP', 'Reward Tokens', 'INFO'],
    rows: [
      ['Popsicle           ', `<a href='popsicle'     >Various</a>`, 'ICE          ', 'https://popsicle.finance'],
      ['Spooky             ', `<a href='spooky'       >Various</a>`, 'boo          ', 'https://spookyswap.finance'],
      ['Spirit             ', `<a href='spirit'       >Various</a>`, 'SPIRIT       ', 'https://app.spiritswap.finance'],
      ['Borg               ', `<a href='borg'         >Various</a>`, 'SON          ', 'https://ftm.borgswap.exchange'],
      ['Hyperjump          ', `<a href='hyperjump'    >Various</a>`, 'ORI          ', 'https://hyperjump.fi'],
      ['Ester              ', `<a href='ester'        >Various</a>`, 'EST          ', 'https://ester.finance'],
      ['Froyo              ', `<a href='froyo'        >Various</a>`, 'FROYO        ', 'https://frozenyogurt.finance'],
      ['The Ghost          ', `<a href='ghost'        >Various</a>`, 'GHOST        ', 'https://www.theghost.finance'],
      ['Beefy              ', `<a href='beefy'        >Various</a>`, 'BIFI         ', 'https://fantom.beefy.finance'],
      ['Liquid Driver      ', `<a href='liquid'       >Various</a>`, 'LQDR         ', 'https://www.liquiddriver.finance'],
      ['Mushrooms          ', `<a href='mushrooms'    >Various</a>`, 'MM           ', 'https://mushrooms.finance/farms'],
      ['Greenhouse         ', `<a href='greenhouse'   >Various</a>`, 'SEED         ', 'https://thegreenhouse.finance'],
      ['Stake Steak        ', `<a href='steak'        >Various</a>`, 'STEAK        ', 'https://stakesteak.com'],
      ['Frankenstein       ', `<a href='frankenstein' >Various</a>`, 'FRANK        ', 'https://frankenstein.finance'],
      ['Waka               ', `<a href='waka'         >Various</a>`, 'WAKA         ', 'https://waka.finance'],
      ['Elk                ', `<a href='elk'          >Various</a>`, 'ELK          ', 'https://app.elk.finance'],
      ['Paintswap          ', `<a href='paintswap'    >Various</a>`, 'BRUSH        ', 'https://paintswap.finance'],
      ['Tomb               ', `<a href='tomb'         >Various</a>`, 'TOMB         ', 'https://tomb.com'],
      ['Shadow             ', `<a href='shadow'       >Various</a>`, 'SHADOW       ', 'https://shadowswap.app'],
      ['Borgswap           ', `<a href='borgswap'     >Various</a>`, 'KLING        ', 'https://klingftm.borgswap.exchange'],
      ['Opera              ', `<a href='opera'        >Various</a>`, 'OPERA        ', 'https://www.operaswap.finance'],
      ['Chad               ', `<a href='chad'         >Various</a>`, 'CHAD         ', 'https://www.chadfinance.io'],
      ['Guru               ', `<a href='guru'         >ELITE-WFTM SLP</a>`, 'ELITE ', 'https://ftm.guru'],
      ['Rediant            ', `<a href="rediant"      >Various</a>`, 'RDT          ', 'https://rediant.finance'],
      ['Mlnl               ', `<a href="mlnl"         >Various</a>`, 'MLNL         ', 'https://milfinance.xyz'],
      ['Yorocoon           ', `<a href="yorocoon"     >Various</a>`, 'CATNIP       ', 'https://yorocoon.com'],
      ['Balloon Farms      ', `<a href='balloonfarms' >Various</a>`, 'BALLOON      ', 'https://www.fantomballoons.com'],
      ['Spoon              ', `<a href='spoon'        >Various</a>`, 'SPOON        ', 'https://app.spoon.finance'],
      ['Bullrun            ', `<a href='bullrun'      >Various</a>`, 'BULL         ', 'https://fantom.bullrun.finance'],
      ['Strangebrew        ', `<a href='strangebrew'  >Various</a>`, 'BEERMONEY    ', 'https://www.strangebrew.finance'],
      ['Uniron             ', `<a href='uniron'       >Various</a>`, 'UNIRON       ', 'https://www.uniron.finance'],
      ['Shade              ', `<a href='shade'        >Various</a>`, 'SHADE        ', 'https://shade.cash'],
      ['Butt               ', `<a href='butt'         >Various</a>`, 'BUTT         ', 'https://www.buttcoincrypto.com'],
      ['Grim               ', `<a href='grim'         >Various</a>`, 'GRIM         ', 'https://app.grim.finance'],
      ['Ryu Inu            ', `<a href='ryuinu'       >Various</a>`, 'RYUINU       ', 'https://ftm.ryuinu.finance'],
      ['Knight             ', `<a href='knight'       >Various</a>`, 'KF           ', 'https://www.knight-finance.xyz'],
      ['beHODL             ', `<a href='behodl'       >Various</a>`, 'beHODL       ', 'N/A'],
      ['AURA               ', `<a href='aura'         >Various</a>`, 'AURA         ', 'https://dapp.aurafi.org'],
      ['Galaxy Finance One ', `<a href='galaxy_triton'>Various</a>`, 'TRITON       ', 'https://fantom-triton.galaxyfinance.one'],
      ['ShibaSwap - GBONE  ', `<a href='shibaswap'    >Various</a>`, 'GBONE        ', 'https://shibafantom.finance'],
      ['ShibaSwap - BONE   ', `<a href='shibaswap_bone'>Various</a>`, 'BONE         ', 'https://shibafantom.finance'],
      ['Guru - LF#1        ', `<a href='guru_lite1'   >NIPS-WFTM ZDEXLP</a>`, 'NIPS', 'https://ftm.guru/LF/1'],
      ['Yield Enhancement Labs', `<a href='yel'        >Various</a>`, 'YEL          ', 'https://yel.finance'],
      ['Guru - LF#2001     ', `<a href='guru_lite2001'>Nova-WFTM spLP</a>`, 'BLK   ', 'https://ftm.guru/LF/2001'],
      ['Guru - LF#2002     ', `<a href='guru_lite2002'>Nova-BLK spLP</a>`, 'Nova   ', 'https://ftm.guru/LF/2002'],
      ['Bomb               ', `<a href='fbomb'        >Various</a>`, 'SHRAP        ', 'https://app.fbomb.finance'],
      ['xDao               ', `<a href='xdao'         >Various</a>`, 'HTZ          ', 'https://thexdao.com'],
      ['Guru - YS#2        ', `<a href='guru_ys2'     >ELITE-WFTM spLP</a>`, 'ELITE', 'https://ftm.guru/YS/2'],
      ['Guru - LF#23       ', `<a href='guru_lite23'  >DEATH-WFTM spLP</a>`, 'DEATH', 'https://ftm.guru/LF/23'],
      ['Zoocoin            ', `<a href='zoocoin'      >Various</a>`, 'WILD         ', 'https://dex.zoocoin.cash'],
      ['FrensFi            ', `<a href='frensfi'      >Various</a>`, 'Various      ', 'https://frens.fi'],
      ['Reaper.Farm        ', `<a href='reaperfarm'   >Various</a>`, 'Various      ', 'https://reaper.farm'],
      ['OberonFinance      ', `<a href='galaxy_oberon'>Various</a>`, 'OBERON       ', 'https://fantom-oberon.galaxyfinance.one'],
      ['Guru - LF#2005     ', `<a href='guru_lite2005'>BLK-WFTM spLP</a>`, 'Nova   ', 'https://ftm.guru/LF/2005'],
      ['Guru - LF#301      ', `<a href='guru_lite301' >TCUZ-WFTM SPIRIT-LP</a>`, 'TCUZ', 'https://ftm.guru/LF/301'],
      ['Morpheus Swap      ', `<a href='morpheusswap' >Various</a>`, 'MORPH        ', 'https://morpheusswap.finance'],
      ['Olive              ', `<a href='olive'        >Various</a>`, 'OLIVE        ', 'https://olive.cash'],
      ['Guru - LF#2004     ', `<a href='guru_lite2004'>Nova</a>`, 'BLK             ', 'https://ftm.guru/LF/2004'],
      ['Guru - LF#2006     ', `<a href='guru_lite2006'>SST-WFTM spLP</a>`, 'BLK    ', 'https://ftm.guru/LF/2006'],
      ['PumpKins Farm      ', `<a href='pumpkinsfarm' >Various</a>`, 'KINS         ', 'https://pumpkins.farm'],
      ['NippleLabs - BOOB  ', `<a href='nipplelabs'   >Various</a>`, 'BOOB         ', 'https://nipplelabs.finance'],
      ['NippleLabs - MILK  ', `<a href='nipplelabs_milk'>Various</a>`, 'MILK       ', 'https://nipplelabs.finance'],
      ['Guru - LF#1010     ', `<a href='guru_lite1010'>SUN</a>`, 'SUN              ', 'https://ftm.guru/LF/1010'],
      ['Guru - LF#1011     ', `<a href='guru_lite1010'>SUN-WFTM SPIRIT-LP</a>`, 'SUN', 'https://ftm.guru/LF/1011'],
      ['WraithSwap         ', `<a href='wraith'       >Various</a>`, 'WRA          ', 'https://wraithswap.finance'],
      ['FoxyFinance        ', `<a href='foxyfinance'  >Various</a>`, 'FOXY         ', 'https://foxyfinance.co'],
      ['Eleven             ', `<a href='eleven'       >Various</a>`, 'Various      ', 'https://eleven.finance'],
      ['Fantom Cougar      ', `<a href='cougar'       >Various</a>`, 'CGS          ', 'https://fantomapp.cougarswap.io'],
      ['Meso Finance       ', `<a href='meso'         >Various</a>`, 'MESO         ', 'https://www.meso.finance'],
      ['Fantom Berry       ', `<a href='berry'        >Various</a>`, 'BERRY        ', 'https://fantomberry.world'],
      ['Procyon            ', `<a href='procyon'      >Various</a>`, 'PROCYON      ', 'https://procyonswap.com'],
      ['Soul Swap          ', `<a href='soulswap'     >Various</a>`, 'SOUL         ', 'https://soul.sh'],
      ['Kavian Finance     ', `<a href='kavian'       >Various</a>`, 'fKAVIAN      ', 'https://fantom.kavian.finance'],
      ['Sapphire DeFi      ', `<a href='sapphire'     >Various</a>`, 'SAPPHIRE     ', 'https://sapphiredefi.com'],
      ['Geist Finance      ', `<a href='geist'        >Various</a>`, 'GEIST        ', 'https://geist.finance'],
      ['Beethovenx         ', `<a href='beethovenx'   >Various</a>`, 'BEETS        ', 'https://app.beethovenx.io'],
      ['Curve              ', `<a href='curve'        >Various</a>`, 'CRV/FTM      ', 'https://ftm.curve.fi'],
      ['Singular           ', `<a href='singular'     >Various</a>`, 'SING         ', 'https://singular.farm'],
      ['KogeFarm           ', `<a href="koge"         >Various</a>`, 'Various      ', 'https://kogefarm.io'],
      ['ScareCrow Finance  ', `<a href='scarecrow'    >Various</a>`, 'SCARE        ', 'https://scarecrow.fi'],
      ['Sapphire War       ', `<a href='sapphirewar'  >Various</a>`, 'WAR          ', 'https://war.sapphiredefi.com'],
      ['DarkMatter         ', `<a href="darkmatter"   >Various</a>`, 'DMD          ', 'https://www.darkmatterdefi.com'],
      ['DegenApe           ', `<a href="degenape"     >Various</a>`, 'DAPE         ', 'https://www.degenapefarm.com'],
      ['ArcDefi            ', `<a href="arcdefi "     >Various</a>`, 'ARC          ', 'https://arcdefi.org'],
      ['Salem              ', `<a href="salem "       >Various</a>`, 'SALEM        ', 'https://salem.finance'],
      ['Maximum            ', `<a href="maximum "     >Various</a>`, 'MAX          ', 'https://maximum.farm'],
      ['Squid              ', `<a href="squid "       >Various</a>`, 'SQUID        ', 'https://squid-defi.com'],
      ['WitcherDeFi        ', `<a href="witcherdefi " >Various</a>`, 'WITCHER      ', 'https://ftm.witcherdefi.com'],
      ['Sapphire Recycle   ', `<a href="recycle "     >Various</a>`, 'RECYCLE      ', 'https://recycle.sapphiredefi.com'],
      ['Venom Finance      ', `<a href="venom"        >Various</a>`, 'VENOM        ', 'https://venom.farm'],
      ['Bouje Finance      ', `<a href="boujefinance ">Various</a>`, 'BOUJE        ', 'https://bouje.finance'],
      ['TrickOrTreat       ', `<a href="trickortreat ">Various</a>`, 'TREAT        ', 'https://trickortreat.farm'],
      ['Beluga             ', `<a href="beluga "      >Various</a>`, 'Various      ', 'https://app.beluga.fi'],
      ['Eldritch Finance   ', `<a href="eldritch"     >Various</a>`, 'ELDR         ', 'https://eldritch.app'],
      ['HarrySwap          ', `<a href="harryswap"    >Various</a>`, 'HARRY        ', 'https://harryswap.finance'],
      ['Mummyz Finance     ', `<a href="mummyz"       >Various</a>`, 'zMUMMY       ', 'https://mummyz.finance'],
      ['The Gas Station    ', `<a href="thegasstation">Various</a>`, 'ftmGAS       ', 'https://gasstationcrypto.com'],
      ['COFFIN FINANCE     ', `<a href="coffin"       >Various</a>`, 'COFFIN       ', 'https://app.coffin.finance'],
      ['Babypig Finance    ', `<a href="babypig"      >Various</a>`, 'fBABYPIG     ', 'https://babypig.finance'],
      ['Draco Force        ', `<a href="dracoforce"   >Various</a>`, 'DRC          ', 'https://dracoforce.com'],
      ['Smurf Clever       ', `<a href="smurf"        >Various</a>`, 'CLEVER       ', 'https://smurf.money'],
      ['Hundred            ', `<a href="hundred"      >Various</a>`, 'HND          ', 'https://hundred.finance'],
      ['FantomPup          ', `<a href="fantompup"    >Various</a>`, 'PUP          ', 'https://fantompup.finance'],
      ['UndeadFinance      ', `<a href="undeadfinance">Various</a>`, 'UNDEAD       ', 'https://undeadfinance.com'],
      ['FanTerra           ', `<a href="fanterra"     >Various</a>`, 'FANTERRA     ', 'https://app.fanterra.finance'],
      ['Bear Finance       ', `<a href="bear"         >Various</a>`, 'BEAR         ', 'https://bearfinance.org'],
      ['Unirex Finance     ', `<a href="unirexfinance">Various</a>`, 'fUNIREX      ', 'https://unirex.finance'],
      ['Krampus Finance    ', `<a href="krampus"      >Various</a>`, 'KrampusToken ', 'https://krampus.finance'],
      ['KUZO Defi          ', `<a href="kuzo"         >Various</a>`, 'KUZO         ', 'https://kuzo.xyz'],
      ['Monster Finance    ', `<a href="monsterfinance">Various</a>`, 'MNSTR       ', 'https://monsterfinance.app'],
      ['Synapse            ', `<a href="synapse"      >Various</a>`, 'SYN          ', 'https://synapseprotocol.com'],
      ['Draco Cave         ', `<a href="dracocave"    >Various</a>`, 'CAVE         ', 'https://cave.dracoforce.com/'],
      ['Eldritch Finance v2  ', `<a href="eldritchv2" >Various</a>`, 'ELDRv2       ', 'https://eldritch.app'],
      ['Knights Finance    ', `<a href="knights"      >Various</a>`, 'KNIGHTS      ', 'https://knightsfinance.xyz'],
      ['FANLuan            ', `<a href="fanluan"      >Various</a>`, 'FLUAN        ', 'https://luan.fanterra.finance'],
      ['Autofarm           ', `<a href='autofarm'     >Various</a>`, 'Various      ', 'https://autofarm.network/fantom'],
      ['MunSwap            ', `<a href='munswap'      >Various</a>`, 'MUN          ', 'https://mun-swap.com'],
      ['TrickorTreat L2    ', `<a href='trick'        >Various</a>`, 'TRICK        ', 'https://trickortreat.farm'],
      ['rKITTEN            ', `<a href='rkitten'      >Various</a>`, 'rKITTEN      ', 'https://kittens.fakeworms.studio/rewards'],
      ['Ghost              ', `<a href='ghst'         >Various</a>`, 'GHST         ', 'https://ghost.maximum.farm'],
      ['Smurf Mushy        ', `<a href='mushy'        >Various</a>`, 'MUSHY        ', 'https://mushy.smurf.money'],
      ['Supercub Finance   ', `<a href='supercub'     >Various</a>`, 'SCUB         ', 'https://supercub.finance'],
      ['Dark KnightSwap    ', `<a href='knightswap'   >Various</a>`, 'DKNIGHT      ', 'https://dark.knightswap.financial'],
      ['Genesys            ', `<a href='genesys   '   >Various</a>`, 'DNA          ', 'https://genesys.app'],
      ['Xmas-Past          ', `<a href='xmaspast '    >Various</a>`, 'XPAST        ', 'https://www.xmas-past.com'],
      ['Bakerguild         ', `<a href='bakerguild '  >Various</a>`, 'BAKER        ', 'https://bakerguild.com'],
      ['DefySwap           ', `<a href='defyswap'     >Various</a>`, 'DFY          ', 'https://defyswap.finance'],
      ['BlackGoat          ', `<a href='blackgoat'    >Various</a>`, 'GOAT         ', 'https://app.fanblackgoat.finance'],
      ['Topshelf           ', `<a href='topshelf'     >Various</a>`, 'LIQR         ', 'https://topshelf.finance'],
      ['Caribou Finance    ', `<a href='caribou'      >Various</a>`, 'CARIBOU      ', 'https://caribou.finance'],
      ['Bag Finance        ', `<a href='bag'          >Various</a>`, 'BGLD         ', 'https://app.thisistheway.finance'],
      ['Goblin             ', `<a href='goblin'       >Various</a>`, 'GOBLIN       ', 'https://thegoblin.money'],
      ['Banksy Farm        ', `<a href='banksyfarm'   >Various</a>`, 'BANKSYFARM   ', 'https://ftm.banksy.farm'],
      ['Tokyo Swap         ', `<a href='tokyoswap'    >Various</a>`, 'TOKYO        ', 'https://ftm.tokyoswap.finance'],
      ['Cougar Vault       ', `<a href='cougar_vault' >Various</a>`, 'CGSV         ', 'https://vault.cougarswap.io'],
      ['Skull Game         ', `<a href='skull'        >Various</a>`, 'SKULL        ', 'https://ftm.skullgamefi.com'],
      ['Waterfall Finance  ', `<a href='waterfallfinance'>Various</a>`, 'WATERFALL ', 'https://app.defiwaterfall.com'],
      ['Davy Jones         ', `<a href='davyjones'    >Various</a>`, 'JONES        ', 'https://davyjones.fi'],
      ['WeVE               ', `<a href='weve'         >Various</a>`, 'WEVE         ', 'https://vedao.io'],
      ['2omb               ', `<a href='2omb'         >Various</a>`, '2SHARES      ', 'https://2omb.finance'],
      ['Degen Haus         ', `<a href='degenhaus'    >Various</a>`, 'TRIP         ', 'https://degen.haus'],
      ['Age                ', `<a href='age'          >Various</a>`, 'AOD          ', 'https://agefantom.com'],
      ['Protofi            ', `<a href="protofi"      >Various</a>`, 'PROTO        ', 'https://fantombank.protofi.app'],
      ['Vapedao            ', `<a href="vapedao"      >Various</a>`, 'vAPE         ', 'https://vapedao.finance'],
      ['Radial Finance     ', `<a href='radial'       >Various</a>`, 'RDL          ', 'https://www.radialfinance.com/farms'],
      ['Webribe            ', `<a href='webribe'      >Various</a>`, 'VBRB         ', 'https://webribe.me'],
      ['0xDAO *            ', `<a href='0xdao'        >Various</a>`, 'OXD          ', 'https://www.oxdao.fi'],
      ['Moneyrain Finance  ', `<a href='moneyrainfinance'>Various</a>`, 'MONEYRAIN ', 'https://defimoneyrain.com'],
      ['Sushi              ', `<a href='sushi'        >Various</a>`, 'SUSHI/FTM    ', 'https://app.sushi.com'],
      ['ViveLaBouje        ', `<a href='vivelabouje'  >Various</a>`, 'VIVE         ', 'https://vive.bouje.finance'],
      ['FATFIRE Finance    ', `<a href='fatfire'      >Various</a>`, 'FATFIRE      ', 'https://fatfire.finance'],
      ['Astral Farm        ', `<a href='astralfarm'   >Various</a>`, 'ASTRAL       ', 'https://astral-farm.com'],
      ['Knights of Fantom  ', `<a href='knightsfantom'>Various</a>`, 'KNIGHTS      ', 'https://www.knights-of-fantom.com'],
      ['Based Finance      ', `<a href='based'        >Various</a>`, 'BASED        ', 'https://basedfinance.io'],
      ['MyMine             ', `<a href='mymine'       >Various</a>`, 'MYMINE       ', 'https://mymine.defiwaterfall.com'],
      ['Platinum Finance   ', `<a href='platinumfi'   >Various</a>`, 'SPLAT / PLAT ', 'https://platinumfi.app'],
      ['3omb               ', `<a href='3omb'         >Various</a>`, '3SHARES / 3OMB', 'https://3omb.finance'],
      ['SpectreFi          ', `<a href='spectrefi'    >Various</a>`, 'SPECT        ', 'https://spectrefi.com'],
      ['Scarface Finance   ', `<a href='scarface'     >Various</a>`, 'SSHARE / SCAR', 'https://scarface.finance'],
      ['The Don Finance    ', `<a href='thedon'       >Various</a>`, 'THEDON       ', 'https://thedon.finance'],
      ['GemMine            ', `<a href='gemmine'      >Various</a>`, 'GEMMINE      ', 'https://gemmine.defiwaterfall.com'],
      ["Scream             ", `<a href='scream'       >Various</a>`, "SCREAM       ", "https://scream.sh"],
      ["Ripae              ", `<a href='ripae'        >Various</a>`, "PAE / pFTM   ", "https://ripae.finance"],
      ["HuntDefi           ", `<a href='huntdefi'     >Various</a>`, "HUNT         ", "https://ftm.huntdefi.com"],
      ["Farmtom            ", `<a href='farmtom'      >Various</a>`, "FRTM         ", "https://farmtom.com"],
      ['Partial Finance    ', `<a href='partialfinance'>Various</a>`, 'PARTIAL      ', 'https://partial.finance'],
      ['Kyrios             ', `<a href='kyrios'       >Various</a>`, 'KYRIOS       ', 'https://kyrios.finance'],
      ['fDoge              ', `<a href='fdoge'        >Various</a>`, 'SDOGE / FDOGE', 'https://fdoge.finance'],
      ['2Doge              ', `<a href='2doge'        >Various</a>`, '2DOGE / 2SDOGE', 'https://2doge.finance'],
      ["Pulsedao           ", `<a href='pulsedao'     >Various</a>`, "pSHARE / PLD ", "https://pulsedao.finance"],
      ['Solidly            ', `<a href='solidly'      >Various</a>`, 'Various      ', 'https://solidly.exchange'],
      ['Bastille De La Bouje', `<a href='bastilledelabouje'      >Various</a>`, 'Various      ', 'https://bastille.bouje.finance'],
      ['pDollar            ', `<a href='pdollar'      >Various</a>`, 'PDO          ', 'https://pdo.partial.finance'],
      ['Lavafall           ', `<a href='lavafall'     >Various</a>`, 'LAVAFALL     ', 'https://lava.defiwaterfall.com'],
      ['WigoSwap           ', `<a href='wigoswap'     >Various</a>`, 'WIGO         ','https://wigoswap.io'],
      ['SpadeFinance       ', `<a href='spadefinance' >Various</a>`, 'SPADE        ','https://spadefinance.farm'],
      ['Fantasm Finance    ', `<a href="fantasm"      >Various</a>`, 'FSM          ','https://fantasm.finance'],
      ['Zombi              ', `<a href='zombi'        >Various</a>`, 'ZOMBI        ', 'https://zombi.finance/'],
      ['Zomb2              ', `<a href='zomb2'        >Various</a>`, 'ZOMB2        ', 'https://zomb2.finance/'],
      ['LIFE               ', `<a href='life'         >Various</a>`, 'LIFE         ', 'https://lif3.exchange'],
      ['JetMine            ', `<a href='jetmine'      >Various</a>`, 'JETMINE      ', 'https://jetmine.defiwaterfall.com'],
      ['Hamster            ', `<a href='hamster'      >Various</a>`, 'HAM / HSHARE ', 'https://hamster.money'],
      ['YieldWolf          ', `<a href='yieldwolf'    >Various</a>`, 'Various      ', 'https://yieldwolf.finance'],
      ['Zomb Finance       ', `<a href='zombfinance'  >Various</a>`, 'ZOMB / ZSHARE', 'https://zombfinance.com'],
      ['Lendly (Hundred Finance)', `<a href='lendly'  >Various</a>`, 'HND          ', 'https://lendly.dashboard.hundred.finance'],
      ['Philetairus socius ', `<a href='philetairussocius'>Various</a>`, 'SOCIUS   ', 'https://www.philetairus-socius.com'],
      ['Excalibur          ', `<a href='excalibur'    >Various</a>`, 'EXC          ', 'https://app.excalibur.exchange']
    ],
  }

  let table = new AsciiTable().fromJSON(tableData)
  document.getElementById('log').innerHTML += table + '<br />'
  hideLoading()
}
