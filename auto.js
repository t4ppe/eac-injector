const fs = require('fs')
const script = require('./script.json')

const example = fs.readFileSync('./example.txt', 'utf8')

function scriptMethodIndex(name) {
    const index = script.ScriptMethod.findIndex(x => x.Name === name)
    return script.ScriptMethod[index].Address
}
function scriptMetadataMethodIndex(name, methodaddress) {
    const index = script.ScriptMetadataMethod.findIndex(x => x.Name === name)
    if (methodaddress == true) {
        return script.ScriptMetadataMethod[index].MethodAddress
    }
    else {
        return script.ScriptMetadataMethod[index].Address
    }
}

const Method$BaseEntity_ServerRPC_StringBool = scriptMetadataMethodIndex('Method$BaseEntity.ServerRPC<string, bool>()', false)
const BaseEntity$$ServerRPC_StringBool = scriptMethodIndex('BaseEntity$$ServerRPC<string, bool>')
const Method$BaseEntity_ServerRPC_PlayerProjectileAttack = scriptMetadataMethodIndex('Method$BaseEntity.ServerRPC<PlayerProjectileAttack>()', false)
const Method$Facepunch_Pool_GetList_TraceInfo_Addr = scriptMetadataMethodIndex('Method$Facepunch.Pool.GetList<TraceInfo>()', false)
const Method$Facepunch_Pool_GetList_TraceInfo_MthdAddr = scriptMetadataMethodIndex('Method$Facepunch.Pool.GetList<TraceInfo>()', true)
const Method$BaseEntity_ServerRPC_uint = scriptMetadataMethodIndex('Method$BaseEntity.ServerRPC<uint>()', false)
const BaseEntity$$ServerRPC_uint = scriptMethodIndex('BaseEntity$$ServerRPC<uint>')
console.log("Found all offset values")

var example1 = example.replace("11xxxxxx", Method$BaseEntity_ServerRPC_StringBool)
var example2 = example1.replace("12xxxxxx", BaseEntity$$ServerRPC_StringBool)
var example3 = example2.replace("51xxxxxx", Method$BaseEntity_ServerRPC_PlayerProjectileAttack)
var example4 = example3.replace("52xxxxxx", Method$Facepunch_Pool_GetList_TraceInfo_Addr)
var example5 = example4.replace("13xxxxxx", Method$Facepunch_Pool_GetList_TraceInfo_MthdAddr)
var example6 = example5.replace("53xxxxxx", Method$BaseEntity_ServerRPC_uint)
var example7 = example6.replace("14xxxxxx", BaseEntity$$ServerRPC_uint)
console.log("Replaced all offset values in cached example")

fs.writeFileSync('C:\\Users\\david\\Desktop\auto-offsets\\offsets.h', example7)
console.log("Wrote new offsets to offsets.h")