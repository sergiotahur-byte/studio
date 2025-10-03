'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, PlusCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const packages = [
  {
    name: 'Consulta Express',
    price: '$60',
    description: 'Para dudas puntuales y orientación rápida.',
    features: [
      'Llamada de 30 minutos',
      'Evaluación inicial del caso',
      'Análisis verbal preliminar',
      'Revisión del contrato de arrendamiento y sus anexos',
      'Acción prejudicial',
      'Plan de acción rápido',
    ],
    isPopular: false,
    cta: 'Pagar Ahora',
    paymentLink: 'https://checkout.wompi.co/l/8lYqai',
  },
  {
    name: 'Consulta Estratégica',
    price: '$125',
    description: 'Análisis profundo y plan de acción detallado.',
    features: [
      'Llamada de 60 minutos',
      'Análisis de los documentos asociados al arrendamiento',
      'Propuesta de estrategia legal',
      'Resolución de hasta 3 dudas',
      'Acciones prejudiciales y extrajudiciales',
      'Acompañamiento personalizado',
    ],
    isPopular: true,
    cta: 'Pagar Ahora',
    paymentLink: 'https://checkout.wompi.co/l/GDIZlG',
  },
];

const ContractReviewPackage = () => {
  const [contractType, setContractType] = useState('residencial');

  const reviewOptions = {
    residencial: {
      price: '$50',
      paymentLink: 'https://checkout.wompi.co/l/SGq7cg',
    },
    comercial: {
      price: '$75',
      paymentLink: 'https://checkout.wompi.co/l/9lVlVf',
    },
  };

  const selectedOption = contractType === 'comercial' ? reviewOptions.comercial : reviewOptions.residencial;
  
  const features = [
      'Revisión exhaustiva de contrato',
      'Informe escrito con cláusulas a modificar o incluir',
      'Propuesta de redacción alternativa',
      'Llamada de 15 min. para resolver dudas',
      'Suministro de documentos complementarios según el perfil',
    ];

  return (
     <Card
      className="flex flex-col bg-card rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
    >
      <CardHeader className="p-8">
        <CardTitle className="text-2xl font-bold font-headline">Revisión de Contrato</CardTitle>
        <CardDescription className="text-foreground/90">Garantiza la legalidad y equidad de tu contrato, ya sea residencial o comercial.</CardDescription>
        <div className="mt-4">
          <span className="text-5xl font-extrabold">{selectedOption.price}</span>
          <span className="text-muted-foreground"> USD</span>
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-0 flex-grow">
        <RadioGroup defaultValue="residencial" onValueChange={setContractType} className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <RadioGroupItem value="residencial" id="review-residencial" className="peer sr-only" />
            <Label
              htmlFor="review-residencial"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Residencial
            </Label>
          </div>
          <div>
            <RadioGroupItem value="comercial" id="review-comercial" className="peer sr-only" />
            <Label
              htmlFor="review-comercial"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Comercial
            </Label>
          </div>
        </RadioGroup>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-8 pt-0">
        <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
          <a href={selectedOption.paymentLink} target="_blank" rel="noopener noreferrer">Pagar Ahora</a>
        </Button>
      </CardFooter>
    </Card>
  );
}

const CustomContractPackage = () => {
  const [contractType, setContractType] = useState('residencial');

  const creationOptions = {
    residencial: {
      price: '$50',
      paymentLink: 'https://checkout.wompi.co/l/5Uq8E8', 
    },
    comercial: {
      price: '$150',
      paymentLink: 'https://checkout.wompi.co/l/ANdloM',
    },
  };
  
  const selectedOption = contractType === 'comercial' ? creationOptions.comercial : creationOptions.residencial;

  const residencialFeatures = [
    'Contrato a la medida residencial',
    'Asesoría legal básica sobre derechos y deberes',
    'Revisión de documentos del arrendatario/propietario',
    'Entrega en PDF listo para firmar',
  ];

  const comercialFeatures = [
    'Redacción completa y adaptada a la necesidad del cliente.',
    'Asesoría legal especializada en temas comerciales y cláusulas especiales.',
    'Revisión de documentos asociados (garantías, fiadores, anexos).',
    'Entrega en PDF listo para firmar.',
  ];

  const features = contractType === 'comercial' ? comercialFeatures : residencialFeatures;

  return (
    <Card
      className="flex flex-col bg-card rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
    >
      <CardHeader className="p-8">
        <CardTitle className="text-2xl font-bold font-headline">Elaboración de Contrato Personalizado</CardTitle>
        <CardDescription className="text-foreground/90">
          {contractType === 'comercial' 
            ? 'El precio puede escalar hasta $300, dependiendo de la complejidad (multisede, cláusulas especiales, garantías elevadas).' 
            : 'Un contrato a la medida para tu tranquilidad.'}
        </CardDescription>
        <div className="mt-4">
          <span className="text-muted-foreground text-sm">Desde</span>
          <span className="text-5xl font-extrabold ml-2">{selectedOption.price}</span>
          <span className="text-muted-foreground"> USD</span>
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-0 flex-grow">
        <RadioGroup defaultValue="residencial" onValueChange={setContractType} className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <RadioGroupItem value="residencial" id="creation-residencial" className="peer sr-only" />
            <Label
              htmlFor="creation-residencial"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Residencial Básico
            </Label>
          </div>
          <div>
            <RadioGroupItem value="comercial" id="creation-comercial" className="peer sr-only" />
            <Label
              htmlFor="creation-comercial"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Comercial / Especial
            </Label>
          </div>
        </RadioGroup>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
          <li className="flex items-start">
            <PlusCircle className="h-5 w-5 text-accent/80 mr-3 mt-1 flex-shrink-0" />
            <span className="text-foreground/70 text-sm">Ofrecemos descuentos por volumen.</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="p-8 pt-0">
        <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
          <a href={selectedOption.paymentLink} target
="_blank" rel="noopener noreferrer">Pagar Ahora</a>
        </Button>
      </CardFooter>
    </Card>
  );
}


export default function ConsultationPackages() {
  return (
    <section id="consultas" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Paquetes de Servicios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/90">
            Elija la consulta que mejor se adapte a sus necesidades para obtener asesoramiento legal experto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`flex flex-col bg-card rounded-xl shadow-lg transition-transform duration-300 ${
                pkg.isPopular ? 'border-accent shadow-accent/20 lg:scale-105' : 'hover:-translate-y-2'
              }`}
            >
              {pkg.isPopular && (
                <div className="bg-accent text-accent-foreground text-sm font-bold text-center py-1 rounded-t-xl">
                  MÁS POPULAR
                </div>
              )}
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold font-headline">{pkg.name}</CardTitle>
                <CardDescription className="text-foreground/90">{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold">{pkg.price}</span>
                  <span className="text-muted-foreground"> USD</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button asChild size="lg" className={`w-full ${pkg.isPopular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'}`}>
                  <a href={pkg.paymentLink} target="_blank" rel="noopener noreferrer">{pkg.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
           <ContractReviewPackage />
           <CustomContractPackage />
        </div>
      </div>
    </section>
  );
}
