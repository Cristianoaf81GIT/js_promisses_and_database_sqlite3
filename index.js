const { LuckyNumber,generateLuckyNumber, setExpireDate } = require('./db/model/luckynumber');
const { connection } = require('./db/conn');

const seed = async function () {
    // descomente na primeira execução e depois antes de executar novamente
    // comente a linha abaixo novamente
    //await connection.sync({force:true}); //<<<< ---- descomente essa linha na 1ª execucao
    var insertData = {
        user_lucky_number: await generateLuckyNumber(10),
        expire: await setExpireDate(10),
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
    };
    
    // obter todos os registros para verificar se o número gerado é repetido
    const numbers = await LuckyNumber.findAll();

    // percorrer o array de registros sempre com loop for tradicional, pois o mesmo
    // respeita o eventLoop do nodejs
    for (let i = 0; i < numbers.length; i++) {
        // enquanto o numero gerado for igual algum número já registrado no banco
        // forçamos o sistema a gerar outro isso não para até termos um valor único
        while(parseInt(numbers[i].user_lucky_number,10) === insertData.user_lucky_number) {
            // para facilitar podemos gerar um número apartir do timestamp do servidor
            // assim nunca teremos um número repetido já que o timestamp considera os segundos
            // então a cada segundo teremos um valor diferente para ser usado como semente
            insertData.user_lucky_number = await generateLuckyNumber(new Date().getTime()/1000000000)
        }
    }
    // depois que saimos do loop o número gerado sera diferente entao salvamos no bd
    const newLuckyNumber = await LuckyNumber.create(insertData);
    // se obtemos um novo numero entao imprimimos o mesmo no console
    if (newLuckyNumber && newLuckyNumber.id) {
        console.log(newLuckyNumber.toJSON());
    }
    connection.close();// encerramos a conexao
    console.log('sucesso!');
};

seed();

