'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/form-actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import type { FormState } from '@/app/types';

const initialState: FormState = {
  status: 'idle',
  message: '',
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Enviar Mensaje
        </>
      )}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: '¡Mensaje Enviado!',
        description: state.message,
      });
    } else if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: state.message,
      });
    }
  }, [state, toast]);


  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Contáctenos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/90">
            ¿Tiene alguna pregunta o necesita una consulta? Envíenos un mensaje y nuestro equipo se pondrá en contacto con usted.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-card p-6 md:p-10 shadow-lg border-white/10">
          <CardHeader className="p-0 text-center">
            <CardTitle className="text-2xl font-bold font-headline">Formulario de Contacto</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">Responderemos a su consulta en menos de 24 horas hábiles.</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-8">
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Nombre Completo</Label>
                <Input id="name" name="name" placeholder="Ej: Juan Pérez" required />
                 {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Correo Electrónico</Label>
                <Input id="email" name="email" type="email" placeholder="Ej: juan.perez@email.com" required />
                 {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Su Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Describa su caso o consulta aquí..." rows={5} required />
                 {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
