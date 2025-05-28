import { Person } from "@/types/person";
import { Separator } from "@/components/ui/separator";
import { usePersonForm } from "@/hooks/usePersonForm";
import PersonBasicInfo from "@/components/PersonBasicInfo";
import PersonFamilyInfo from "@/components/PersonFamilyInfo";
import PersonFormActions from "@/components/PersonFormActions";

interface PersonDetailsFormProps {
  person: Person;
  onUpdate: (person: Person) => void;
  onRemove: () => void;
  persons: Person[];
}

const PersonDetailsForm = ({
  person,
  onUpdate,
  onRemove,
}: PersonDetailsFormProps) => {
  const { formData, handleChange, handleNumberChange, handleSelectChange } =
    usePersonForm(person);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PersonBasicInfo
        formData={formData}
        onInputChange={handleChange}
        onNumberChange={handleNumberChange}
        onSelectChange={handleSelectChange}
      />

      <Separator />

      <PersonFamilyInfo
        formData={formData}
        onSelectChange={handleSelectChange}
      />

      <PersonFormActions onRemove={onRemove} />
    </form>
  );
};

export default PersonDetailsForm;
