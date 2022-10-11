import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
export class AddProduitComponent implements OnInit {
newProduit = new Produit();
constructor(private produitService: ProduitService) { }
addProduit(){
// console.log(this.newProduit);
this.produitService.ajouterProduit(this.newProduit);