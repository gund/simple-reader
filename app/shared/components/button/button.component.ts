import { toColor } from '../../../core/utils/util';
import { EventEmitter, Input, Output } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.common.css', './button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() text: string;
  @Input() shadowColor = [17, 23, 34];
  @Input() shadowAlpha = 10;
  @Output() tap = new EventEmitter<any>();

  onTap(event: any) {
    this.tap.emit(event);
  }

  onShadowLoaded(args: any) {
    const tnsView = <any>args.object; //This is the outer StackLayout
    if (tnsView.android) {
      const nativeAnView = tnsView.android;
      nativeAnView.setBackgroundDrawable(this.prepareShadowGradient());
      nativeAnView.setElevation(20);
    } else if (tnsView.ios) {
      const nativeView = tnsView.ios;
      nativeView.layer.shadowColor = new Color(this.shadowColor).ios.CGColor;
      nativeView.layer.shadowOffset = CGSizeMake(0, 2.0);
      nativeView.layer.shadowOpacity = this.shadowAlpha / 100;
    }
  }

  private prepareShadowGradient() {
    const shape = new android.graphics.drawable.GradientDrawable();
    // shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
    // shape.setGradientType(android.graphics.drawable.GradientDrawable.RADIAL_GRADIENT);
    // shape.setGradientRadius(150);
    shape.setStroke(1, android.graphics.Color.GREEN);
    shape.setCornerRadius(4);
    shape.setColors([
      toColor(this.shadowAlpha, ...this.shadowColor),
      android.graphics.Color.RED,
      android.graphics.Color.BLUE,
    ]);

    return shape;
  }

}
