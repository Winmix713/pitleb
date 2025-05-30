import { 
  Undo, 
  Redo, 
  Layout, 
  Type, 
  Image, 
  Shapes, 
  Bold, 
  Italic, 
  Underline, 
  Palette, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  Table,
  BarChart,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function EditorToolbar() {
  const { toast } = useToast();

  const handleToolAction = (action: string) => {
    toast({
      title: action,
      description: `${action} functionality will be implemented`,
    });
  };

  return (
    <div className="flex items-center justify-center px-3 py-1 border-b editor-border bg-editor-dark flex-shrink-0 gap-1">
      {/* Undo/Redo Group */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Undo")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Undo"
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Redo")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Redo"
        >
          <Redo className="h-4 w-4" />
        </Button>
      </div>

      <div className="w-px h-4 bg-editor-border mx-2"></div>

      {/* Layout and Insert Group */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Layout Options")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Layout Options"
        >
          <Layout className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Text Box")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Text Box"
        >
          <Type className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Insert Image")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Insert Image"
        >
          <Image className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Insert Shape")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Insert Shape"
        >
          <Shapes className="h-4 w-4" />
        </Button>
      </div>

      <div className="w-px h-4 bg-editor-border mx-2"></div>

      {/* Text Formatting Group */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Bold")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text font-bold"
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Italic")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Underline")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Underline"
        >
          <Underline className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Text Color")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Text Color"
        >
          <Palette className="h-4 w-4" />
        </Button>
      </div>

      <div className="w-px h-4 bg-editor-border mx-2"></div>

      {/* Alignment Group */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Align Left")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Align Center")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Align Right")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="w-px h-4 bg-editor-border mx-2"></div>

      {/* Insert Tools Group */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Insert Table")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Insert Table"
        >
          <Table className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Insert Chart")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Insert Chart"
        >
          <BarChart className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleToolAction("Insert Video")}
          className="w-8 h-8 p-0 hover:bg-editor-light text-editor-text"
          title="Insert Video"
        >
          <Video className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
