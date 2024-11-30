import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listItems: { text: string }[] = [];
  private sortingMode: boolean = false; // false = ascendant, true = descendant
  private colorMode: boolean = false; // false = noir, true = couleur aléatoire

  constructor() {}

  // Ajouter un élément à la liste
  addItem(itemText: string): void {
    this.listItems.push({ text: itemText });
  }

  // Supprimer le dernier élément de la liste
  deleteLastItem(): void {
    this.listItems.pop();
  }

  // Retourner la liste triée selon le mode (ascendant / descendant)
  getSortedList(): { text: string }[] {
    return this.sortingMode
      ? [...this.listItems].sort((a, b) => (a.text > b.text ? -1 : 1))
      : [...this.listItems].sort((a, b) => (a.text < b.text ? -1 : 1));
  }

  // Retourner la couleur pour un élément donné
  getColor(index: number): string {
    return this.colorMode ? this.getRandomColor() : 'black';
  }

  // Bascule le mode de tri (ascendant / descendant)
  toggleSortingMode(): void {
    this.sortingMode = !this.sortingMode;
  }

  // Bascule le mode de coloration aléatoire
  toggleRandomColoring(): void {
    this.colorMode = !this.colorMode;
  }

  // Génère une couleur aléatoire pour les éléments
  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Méthode d'accès pour récupérer la couleur active du tri
  get sortingModeState(): boolean {
    return this.sortingMode;
  }

  // Méthode d'accès pour récupérer l'état du mode de coloration
  get colorModeState(): boolean {
    return this.colorMode;
  }
}
