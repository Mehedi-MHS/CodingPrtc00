public class RandomCircles extends Applet
implements Runnable {
private boolean drawCircles = false;
public void startCircles() {
Thread t = new Thread(this);
t.start();
}
public void run() {
Color[] colors = { Color.lightGray, Color.gray,
Color.darkGray, Color.black };
int colorIndex = 0;
int x, y;
int width = getSize().width;
int height = getSize().height;
Graphics g = getGraphics();
drawCircles = true;
while(drawCircles) {
x = (int)Math.round(width * Math.random());
y = (int)Math.round(height * Math.random());
g.setColor(colors[colorIndex]);
colorIndex = (colorIndex + 1) % colors.length;
g.fillOval(x, y, 10, 10);
pause(0.1);
}
}
public void stopCircles() {
drawCircles = false;
}
private void pause(double seconds) {
try {
Thread.sleep((int)(Math.round(seconds * 1000.0)));
} catch(InterruptedException ie) {}
}
}