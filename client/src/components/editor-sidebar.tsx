import { Search, Plus, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateSlide } from "@/hooks/use-presentation";
import { useToast } from "@/hooks/use-toast";
import type { Slide } from "@shared/schema";

interface EditorSidebarProps {
  slides: Slide[];
  currentSlideId: number | null;
  onSlideSelect: (slideId: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  presentationId?: number;
}

export default function EditorSidebar({
  slides,
  currentSlideId,
  onSlideSelect,
  searchQuery,
  onSearchChange,
  presentationId,
}: EditorSidebarProps) {
  const createSlide = useCreateSlide();
  const { toast } = useToast();

  const handleAddSlide = () => {
    if (!presentationId) return;

    const nextPosition = slides.length;
    createSlide.mutate(
      {
        presentationId,
        data: {
          title: `Slide ${nextPosition + 1}`,
          content: {},
          position: nextPosition,
        },
      },
      {
        onSuccess: (newSlide) => {
          onSlideSelect(newSlide.id);
          toast({
            title: "Slide Added",
            description: "New slide created successfully",
          });
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to create slide",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <aside className="w-60 bg-editor-dark border-r editor-border flex flex-col flex-shrink-0 pt-3">
      <div className="px-3 pb-3">
        {/* Search Input */}
        <div className="relative mb-3">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 editor-text-muted pointer-events-none" />
          <Input
            type="text"
            placeholder="Search slides..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8 bg-editor-light border-transparent text-editor-text placeholder:text-editor-text-muted focus:border-blue-500"
          />
        </div>

        {/* Add Slide Button */}
        <Button
          onClick={handleAddSlide}
          disabled={createSlide.isPending || !presentationId}
          className="w-full flex items-center justify-center gap-2 editor-accent hover:editor-accent text-white"
        >
          <Plus className="h-4 w-4" />
          Add Slide
        </Button>
      </div>

      {/* Slide List */}
      <div className="flex-1 overflow-y-auto px-2 slide-list-scroll">
        {slides.length === 0 ? (
          <div className="text-center editor-text-muted text-sm py-8 px-4">
            <FileImage className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="font-medium mb-1">No slides yet</p>
            <p className="text-xs">Click "Add Slide" to get started</p>
          </div>
        ) : (
          <div className="space-y-2">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                onClick={() => onSlideSelect(slide.id)}
                className={`mb-2 p-2 rounded-lg cursor-pointer transition-colors group ${
                  currentSlideId === slide.id
                    ? "bg-editor-light border-2 border-blue-500"
                    : "hover:bg-editor-light border-2 border-transparent"
                }`}
              >
                <div className="slide-canvas bg-white rounded border-2 border-transparent mb-2">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    Slide {index + 1}
                  </div>
                </div>
                <p className="text-xs editor-text-muted truncate">{slide.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
