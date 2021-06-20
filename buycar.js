module.exports = {
  
  name: "buy-car",
  code: `
$description[**@$username Success in buying a Car!!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];65.000]]
$setGlobalUserVar[car;$sum[$getGlobalUserVar[car];1]]
$onlyIf[$getGlobalUserVar[cash]>=65.000;Not enough cash!]`
}