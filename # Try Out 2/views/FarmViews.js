class FarmView {
  static help(){
    console.log('Farm Command Lists:');
    console.log('node index help');
    console.log('node index show');
    console.log('node index create <farm_name>');
    console.log('node index details <farm_name>');
    console.log('node index add <farm_name> <livestock_type>');
    console.log('node index sell <farm_name> <livestock_id>');
    console.log('node index totalProduce <farm_name>');
    console.log('node index sort <sort_type>');
  };

  static show(farms) {
    console.log(`Farms List :`);
    farms.forEach(farm => {
      const {id, name, livestock} = farm;
      console.log(`${id}. "${name}" has ${livestock} livestocks`);
    });
  };

  static message(message){
    console.log(message)
  };
};

module.exports = FarmView;