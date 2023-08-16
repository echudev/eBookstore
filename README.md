# eBookstore
Prueba Técnica frontend de Midudev.
- Web oficial: [Pruebas Técnicas](https://pruebastecnicas.com/)	
- Live Demo: [eBookstore](https://ebookstore-ten.vercel.app/)

### Built with

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Deployment: [Vercel](https://vercel.com/)
- Store: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Unit Test: [Jest](https://nextjs.org/docs/pages/building-your-application/optimizing/testing)

Para la persistencia de datos con localstorage, se utiliza el middleware 'persist' de Zustand.
Para evitar errores de hidratación entre Nextjs y el localstorage, se accede al localstorage usando useEffect,
en el caso de Zustand/persist, creo hook personalizado useStore, el cual accede al store de Zustand mediante useEffect.
