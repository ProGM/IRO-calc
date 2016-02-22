 function parseItemEffects(script, item) {
  var parsed = rathena_parser.parse(script);
  var bStr = 1,
      bInt = 2,
      bDex = 3,
      bVit = 4,
      bAgi = 5,
      bLuk = 6;
  function readparam(param) {
    switch(param) {
      case bStr:
        return SU_STR;
      case bInt:
        return SU_INT;
      case bDex:
        return SU_DEX;
      case bAgi:
        return SU_AGI;
      case bVit:
        return SU_VIT;
      case bLuk:
        return SU_LUK;
      default:
        return 0;
    }
  }

  function getrefine() {
    if (item.type > weapTyp_BARE && item.type <= weapTyp_GRENADE) {
      return n_A_Weapon_ATKplus;
    } else {
      switch (item.type) {
        case itm_type_HEAD_UPPER:
          return n_A_HEAD_DEF_PLUS;
        case itm_type_ARMOR:
          return n_A_BODY_DEF_PLUS;
        case itm_type_SHIELD:
          return n_A_LEFT_DEF_PLUS;
        case itm_type_GARMENT:
          return n_A_SHOULDER_DEF_PLUS;
        case itm_type_SHOES:
          return n_A_SHOES_DEF_PLUS;
        default:
          return 0;
      }
    }
  }

  var DB = {};

  function nestedAssign(obj, previous_value) {
    if (obj === parseInt(obj, 10)) {
      return obj + previous_value;
    } else if (typeof obj === 'string') {
      return eval(obj) + previous_value;
    } else {
      for (var key in obj) {
        if (previous_value[key]) {
          obj[key] = nestedAssign(obj[key], previous_value[key]);
        } else {
          obj[key] = nestedAssign(obj[key], 0);
        }
      }
      return obj;
    }
  }

  var _locals = {};

  function nestedEval(obj) {
    for (var key in obj) {
      if (key == 'command') {
        eval(obj[key]);
      } else if (key == 'conditions') {
        for (var i = 0; i < obj[key].length; i++) {
          var condition = obj[key][i];
          if (eval(condition.condition)) {
            for (var j = 0; j < condition.body.length; j++) {
              nestedEval(condition.body[j]);
            }
          } else {
          }
        }
      } else if (DB[key]) {
        DB[key] = nestedAssign(obj[key], DB[key])
      } else {
        DB[key] = nestedAssign(obj[key], 0)
      }
    }
  }
  nestedEval(parsed);
  return DB;
};
