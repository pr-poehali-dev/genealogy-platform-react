import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { usePersonsData } from "@/hooks/usePersonsData";
import { Person } from "@/types/person";

export const useTreeCreation = () => {
  const { toast } = useToast();
  const { persons, addPerson, updatePerson, removePerson } = usePersonsData();
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [activeTab, setActiveTab] = useState("canvas");

  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person);
    setActiveTab("details");

    toast({
      title: "Персона выбрана",
      description: `${person.name || "Без имени"} теперь активна для редактирования`,
    });
  };

  const handleAddPerson = () => {
    const newPerson: Person = {
      id: `person_${Date.now()}`,
      name: "Новая персона",
      generation: 0,
    };

    addPerson(newPerson);
    setSelectedPerson(newPerson);
    setActiveTab("details");

    toast({
      title: "Персона добавлена",
      description: "Новая персона успешно добавлена в ваше древо",
    });
  };

  const handleUpdatePerson = (updatedPerson: Person) => {
    updatePerson(updatedPerson);
    setSelectedPerson(updatedPerson);

    toast({
      title: "Данные обновлены",
      description: "Информация о персоне успешно обновлена",
    });
  };

  const handleRemovePerson = (personId: string) => {
    removePerson(personId);
    setSelectedPerson(null);

    toast({
      title: "Персона удалена",
      description: "Персона успешно удалена из вашего древа",
    });
  };

  return {
    persons,
    selectedPerson,
    activeTab,
    setActiveTab,
    handleSelectPerson,
    handleAddPerson,
    handleUpdatePerson,
    handleRemovePerson,
  };
};
