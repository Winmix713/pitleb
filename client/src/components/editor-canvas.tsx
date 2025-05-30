import { MousePointer, Minus, Plus, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Slide } from "@shared/schema";

interface EditorCanvasProps {
  currentSlide?: Slide;
  currentSlideIndex: number;
  totalSlides: number;
  zoomLevel: number;
  onZoomChange: (level: number) => void;
}

export default function EditorCanvas({
  currentSlide,
  currentSlideIndex,
  totalSlides,
  zoomLevel,
  onZoomChange,
}: EditorCanvasProps) {
  const handleZoomOut = () => {
    if (zoomLevel > 25) {
      onZoomChange(Math.max(25, zoomLevel - 25));
    }
  };

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      onZoomChange(Math.min(200, zoomLevel + 25));
    }
  };

  const handleFitToScreen = () => {
    onZoomChange(100);
  };

  const handleZoomSelect = (value: string) => {
    const level = parseInt(value);
    onZoomChange(level);
  };

  return (
    <main className="flex-1 editor-medium flex flex-col items-center justify-center p-8 relative">
      {/* Slide Canvas */}
      <div
        className="slide-canvas w-full max-w-5xl bg-white rounded-lg shadow-2xl transform-gpu transition-transform duration-200"
        style={{ transform: `scale(${zoomLevel / 100})` }}
      >
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
          <div className="text-center">
            <MousePointer className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="font-medium">Click to add content</p>
            <p className="text-sm opacity-75 mt-1">Add text, images, shapes and more</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-editor-dark border-t editor-border px-4 py-1 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 editor-text-muted">
          <span>
            Slide {Math.max(1, currentSlideIndex + 1)} of {Math.max(1, totalSlides)}
          </span>
          <span>•</span>
          <span>Auto-saved 2 minutes ago</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            disabled={zoomLevel <= 25}
            className="w-6 h-6 p-0 hover:bg-editor-light text-editor-text"
            title="Zoom Out"
          >
            <Minus className="w-3 h-3" />
          </Button>

          <Select value={zoomLevel.toString()} onValueChange={handleZoomSelect}>
            <SelectTrigger className="w-20 h-6 text-xs bg-editor-light border-editor-border text-editor-text focus:border-blue-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-editor-light border-editor-border">
              <SelectItem value="25" className="text-editor-text hover:bg-editor-dark">25%</SelectItem>
              <SelectItem value="50" className="text-editor-text hover:bg-editor-dark">50%</SelectItem>
              <SelectItem value="75" className="text-editor-text hover:bg-editor-dark">75%</SelectItem>
              <SelectItem value="100" className="text-editor-text hover:bg-editor-dark">100%</SelectItem>
              <SelectItem value="125" className="text-editor-text hover:bg-editor-dark">125%</SelectItem>
              <SelectItem value="150" className="text-editor-text hover:bg-editor-dark">150%</SelectItem>
              <SelectItem value="200" className="text-editor-text hover:bg-editor-dark">200%</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            disabled={zoomLevel >= 200}
            className="w-6 h-6 p-0 hover:bg-editor-light text-editor-text"
            title="Zoom In"
          >
            <Plus className="w-3 h-3" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleFitToScreen}
            className="w-6 h-6 p-0 hover:bg-editor-light text-editor-text ml-2"
            title="Fit to Screen"
          >
            <Maximize className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </main>
  );
}
