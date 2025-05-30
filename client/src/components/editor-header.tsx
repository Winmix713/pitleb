import { ArrowLeft, Save, Share, Play, Download, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUpdatePresentation } from "@/hooks/use-presentation";
import { useToast } from "@/hooks/use-toast";
import type { Presentation } from "@shared/schema";

interface EditorHeaderProps {
  presentation?: Presentation | null;
  presentationId?: number;
}

export default function EditorHeader({ presentation, presentationId }: EditorHeaderProps) {
  const updatePresentation = useUpdatePresentation();
  const { toast } = useToast();

  const handleSave = () => {
    if (presentationId) {
      updatePresentation.mutate(
        { id: presentationId, data: {} },
        {
          onSuccess: () => {
            toast({
              title: "Saved",
              description: "Presentation saved successfully",
            });
          },
          onError: () => {
            toast({
              title: "Error",
              description: "Failed to save presentation",
              variant: "destructive",
            });
          },
        }
      );
    }
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Share functionality will be implemented",
    });
  };

  const handlePresent = () => {
    toast({
      title: "Present",
      description: "Presentation mode will be implemented",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download",
      description: "Download functionality will be implemented",
    });
  };

  return (
    <header className="flex items-center justify-between px-3 py-1.5 border-b editor-border bg-editor-dark text-sm flex-shrink-0">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Back to presentation list"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-sm font-medium cursor-pointer text-editor-text">
            {presentation?.title || "Untitled Presentation"}
          </h1>
          <span className="text-xs editor-text-muted">All changes saved</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSave}
          className="text-sm font-medium hover:bg-editor-light text-editor-text"
          disabled={updatePresentation.isPending}
        >
          <Save className="h-3.5 w-3.5 mr-1.5" />
          Save
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleShare}
          className="text-sm font-medium hover:bg-editor-light text-editor-text"
        >
          <Share className="h-3.5 w-3.5 mr-1.5" />
          Share
        </Button>

        <Button
          size="sm"
          onClick={handlePresent}
          className="text-sm font-medium editor-accent hover:editor-accent text-white"
        >
          <Play className="h-3.5 w-3.5 mr-1.5 fill-current" />
          Present
        </Button>

        <div className="w-px h-5 bg-editor-border mx-1"></div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleDownload}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Download"
        >
          <Download className="h-3.5 w-3.5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="More options"
        >
          <MoreVertical className="h-3.5 w-3.5" />
        </Button>
      </div>
    </header>
  );
}
