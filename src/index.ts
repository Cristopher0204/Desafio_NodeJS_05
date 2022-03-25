/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { NOMEM } from "dns";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
});
class Aluno {
	static forEach: any;
	
	static push() {
		throw new Error("Method not implemented.");
	}
	nome: string;
	idade: Number;
	nota: Number;
	
	constructor(nome: string,idade: Number,nota: Number){
	this.nome=nome;
	this.idade=idade;
	this.nota=nota;
	}
	}
	const aluno = new Aluno('cris',21,5)
	let alunos:Array<Aluno> = [];
	
	const readlinesync = require('readline-sync');
	
	let quantidadeDeAlunos = readlinesync.question('Quantos alunos são? \n')
	
	for (let index = 1; index <= quantidadeDeAlunos; index++) {
		let nome = readlinesync.question(`nome do ${index} aluno: \n`)
		let idade=parseInt(readlinesync.question(`idade do ${index} aluno: \n`))
		let nota =parseInt(readlinesync.question(`Informe a nota do ${index} aluno: \n`))
	
		const aluno = new Aluno(nome,idade,nota)
		
	 alunos.push(aluno);
	
	}
	 console.log(alunos);
	 
	 let somaDaNota = 0;
		
	 alunos.forEach(function(a: any , nota: number ){
	 somaDaNota += a.nota
	
	 console.log(alunos)
	 console.log(somaDaNota)
	 });
	 const ObjectsToCsv = require('objects-to-csv');

	 (async () => {
	   const csv = new ObjectsToCsv(alunos);
	  
	   
	   await csv.toDisk('./test.csv');
	  
	   
	   console.log(await csv.toString());
	 })();