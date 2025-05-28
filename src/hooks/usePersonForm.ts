import { useState } from "react";
import { Person } from "@/types/person";

export const usePersonForm = (initialPerson: Person) => {
  const [formData, setFormData] = useState<Person>({ ...initialPerson });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value ? parseInt(value, 10) : undefined,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    handleChange,
    handleNumberChange,
    handleSelectChange,
    setFormData,
  };
};
