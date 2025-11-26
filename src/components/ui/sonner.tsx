// import { useTheme } from "next-themes";
// import { Toaster as Sonner, toast } from "sonner";

// type ToasterProps = React.ComponentProps<typeof Sonner>;

// const Toaster = ({ ...props }: ToasterProps) => {
//   const { theme = "system" } = useTheme();

//   return (
//     <Sonner
//       theme={theme as ToasterProps["theme"]}
//       className="toaster group"
//       toastOptions={{
//         classNames: {
//           toast:
//             "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
//           description: "group-[.toast]:text-muted-foreground",
//           actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
//           cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
//         },
//       }}
//       {...props}
//     />
//   );
// };

// export { Toaster, toast };



// import { Toaster, toast } from "sonner";
// import { AppToaster } from "@/components/ui/sonner";

// export function AppToaster() {
//   return (
//     <Toaster
//       position="top-right"
//       richColors
//       closeButton
//       toastOptions={{
//         classNames: {
//           toast: "bg-background text-foreground border-border shadow-lg",
//           description: "text-muted-foreground",
//           actionButton: "bg-primary text-primary-foreground",
//           cancelButton: "bg-muted text-muted-foreground",
//         },
//       }}
//     />
//   );
// }

// export { toast };





import { useTheme } from "next-themes";
import { Toaster as SonnerToaster, toast } from "sonner";

export const Toaster = (props: any) => {
  const { theme = "system" } = useTheme();

  return (
    <SonnerToaster
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { toast };
