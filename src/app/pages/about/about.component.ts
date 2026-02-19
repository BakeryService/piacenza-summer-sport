import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  photos = signal(['assets/gallery/photo_5776339952512732272_y.jpg',
    'assets/gallery/photo_5776339952512732230_y.jpg',
    'assets/gallery/photo_5776339952512732244_y.jpg',
    'assets/gallery/photo_5776339952512732276_y.jpg',
    'assets/gallery/photo_5776339952512732238_y.jpg',
    'assets/gallery/photo_5776339952512732247_y.jpg',
    'assets/gallery/photo_5776339952512732273_y.jpg',
  ]);
  currentIndex = signal(0);
  scale = signal(1);
  translateX = signal(0);
  translateY = signal(0);

  isDragging = false;
  lastX = 0;
  lastY = 0;

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = event.deltaY * -0.01;
    this.scale.set(Math.min(Math.max(this.scale() + delta, 0.5), 5));
    this.clampTranslate();
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.lastX = event.clientX;
    this.lastY = event.clientY;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    this.translateX.set(this.translateX() + event.clientX - this.lastX);
    this.translateY.set(this.translateY() + event.clientY - this.lastY);
    this.lastX = event.clientX;
    this.lastY = event.clientY;
    this.clampTranslate();
  }

  onMouseUp() {
    this.isDragging = false;
  }

  private clampTranslate() {
    // Simple clamp to prevent over-panning (adjust bounds as needed)
    this.translateX.set(Math.max(-50 * (this.scale() - 1), Math.min(50 * (this.scale() - 1), this.translateX())));
    this.translateY.set(Math.max(-50 * (this.scale() - 1), Math.min(50 * (this.scale() - 1), this.translateY())));
  }

}

