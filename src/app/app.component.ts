import { Component } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enteredText: string = ''; // Texte entré par l'utilisateur
  buttonLabel: string = 'Activer la couleur aléatoire';
  sortingModeLabel: string = 'Activer le tri descendant';

  constructor(private listService: ListService) {}

  // Afficher un message de bienvenue
  showGreeting(): void {
    alert('Bonjour, bienvenue dans l\'application!');
  }

  // Ajouter un élément à la liste
  extractText(): void {
    if (this.enteredText) {
      this.listService.addItem(this.enteredText);
      this.enteredText = ''; // Réinitialiser le champ de texte après ajout
    }
  }

  // Supprimer le dernier élément de la liste
  deleteLastItem(): void {
    this.listService.deleteLastItem();
  }

  // Basculer entre les modes de tri
  toggleSortingMode(): void {
    this.listService.toggleSortingMode();
    this.sortingModeLabel = this.listService.sortingModeState
      ? 'Activer le tri ascendant'
      : 'Activer le tri descendant';
  }

  // Basculer entre les modes de couleur
  toggleRandomColoring(): void {
    this.listService.toggleRandomColoring();
    this.buttonLabel = this.listService.colorModeState
      ? 'Désactiver la couleur aléatoire'
      : 'Activer la couleur aléatoire';
  }

  // Obtenir la liste triée et colorée
  get listItems() {
    return this.listService.getSortedList();
  }

  // Obtenir la couleur pour chaque élément
  getColor(index: number): string {
    return this.listService.getColor(index);
  }
}
