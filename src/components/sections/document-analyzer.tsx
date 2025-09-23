'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { analyzeLease } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileUp, Loader2, AlertTriangle, ShieldCheck } from 'lucide-react';
import type { AnalyzeLeaseAgreementOutput } from '@/ai/flows/analyze-lease-agreement';

export default function DocumentAnalyzer() {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeLeaseAgreementOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
       if (selectedFile.size > 4 * 1024 * 1024) { // 4MB limit
        toast({
          variant: 'destructive',
          title: 'Archivo demasiado grande',
          description: 'Por favor, suba un archivo de menos de 4MB.',
        });
        return;
      }
      setFile(selectedFile);
      setAnalysisResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      toast({
        variant: 'destructive',
        title: 'No hay archivo',
        description: 'Por favor, seleccione un documento para analizar.',
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const dataUri = reader.result as string;
      const result = await analyzeLease(dataUri);

      if (result.success && result.data) {
        setAnalysisResult(result.data);
      } else {
        setError(result.error || 'Ocurrió un error inesperado.');
        toast({
          variant: 'destructive',
          title: 'Error de Análisis',
          description: result.error || 'No se pudo analizar el documento.',
        });
      }
      setIsLoading(false);
    };
    reader.onerror = () => {
      setError('No se pudo leer el archivo.');
      toast({
        variant: 'destructive',
        title: 'Error de Lectura',
        description: 'No se pudo procesar el archivo seleccionado.',
      });
      setIsLoading(false);
    };
  };

  return (
    <section id="analisis-ia" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Analice su Contrato con IA</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            Suba su contrato de arriendo (PDF o imagen) y nuestra IA identificará cláusulas potencialmente abusivas o injustas, dándole claridad y poder de negociación.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card p-6 md:p-10 shadow-lg">
          <CardHeader className="p-0 text-center">
            <CardTitle className="text-2xl font-bold font-headline">Herramienta de Análisis de Contratos</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">Suba su documento para recibir un análisis instantáneo.</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-8">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="lease-document" className="text-foreground/80">Documento de Arrendamiento</Label>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Input id="lease-document" type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={handleFileChange} className="flex-grow" />
                  <Button onClick={handleAnalyze} disabled={isLoading || !file} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ShieldCheck className="mr-2 h-4 w-4" />}
                    Analizar Ahora
                  </Button>
                </div>
                 <div className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
                  <p>
                    <b>Tu privacidad es importante.</b> Los documentos se procesan de forma segura y no se almacenan después del análisis.
                  </p>
                </div>
                {file && <p className="text-sm text-muted-foreground mt-2">Archivo seleccionado: {file.name}</p>}
              </div>
            </div>

            {isLoading && (
              <div className="text-center mt-8 p-8 border-2 border-dashed rounded-lg">
                <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin mb-4" />
                <p className="text-lg font-semibold text-foreground">Analizando documento...</p>
                <p className="text-sm text-muted-foreground">Esto puede tardar unos segundos.</p>
              </div>
            )}

            {error && (
              <div className="mt-8 text-center p-8 bg-destructive/10 border border-destructive/20 rounded-lg">
                <AlertTriangle className="mx-auto h-12 w-12 text-destructive mb-4" />
                <p className="text-lg font-semibold text-destructive">Error en el Análisis</p>
                <p className="text-sm text-destructive/80">{error}</p>
              </div>
            )}

            {analysisResult && (
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-headline text-center">Resultados del Análisis</h3>
                </div>
                <Card className="bg-secondary">
                  <CardHeader>
                    <CardTitle>Resumen del Contrato</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{analysisResult.summary}</p>
                  </CardContent>
                </Card>

                {analysisResult.unfairClauses && analysisResult.unfairClauses.length > 0 && (
                   <Card className="bg-secondary">
                    <CardHeader>
                      <CardTitle>Cláusulas Potencialmente Injustas Encontradas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {analysisResult.unfairClauses.map((item, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left hover:no-underline">
                              <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                                <span className="font-medium text-foreground">{item.clause}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-8 text-muted-foreground">
                              {item.explanation}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                   </Card>
                )}

                 {analysisResult.unfairClauses && analysisResult.unfairClauses.length === 0 && (
                  <div className="text-center p-8 border-2 border-dashed border-primary/30 rounded-lg bg-primary/10">
                    <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />
                    <p className="text-lg font-semibold text-primary">¡Buenas noticias!</p>
                    <p className="text-sm text-primary/80">No se han encontrado cláusulas claramente injustas en un análisis preliminar. Para una revisión exhaustiva, considere una consulta legal.</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
