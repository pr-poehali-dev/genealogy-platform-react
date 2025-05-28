import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TreeCanvas from "@/components/TreeCanvas";
import PersonDetailsForm from "@/components/PersonDetailsForm";
import EmptyTreeState from "@/components/EmptyTreeState";
import PersonPreview from "@/components/PersonPreview";
import TreeSettings from "@/components/TreeSettings";
import { useTreeCreation } from "@/hooks/useTreeCreation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const CreateTree = () => {
  const {
    persons,
    selectedPerson,
    activeTab,
    setActiveTab,
    handleSelectPerson,
    handleAddPerson,
    handleUpdatePerson,
    handleRemovePerson,
  } = useTreeCreation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container py-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Создание семейного древа</h1>

          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setActiveTab("canvas")}>
              <Icon name="Eye" className="mr-2 h-4 w-4" />
              Просмотр
            </Button>
            <Button onClick={handleAddPerson}>
              <Icon name="UserPlus" className="mr-2 h-4 w-4" />
              Добавить персону
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="canvas">Древо</TabsTrigger>
            <TabsTrigger value="details" disabled={!selectedPerson}>
              Детали персоны
            </TabsTrigger>
            <TabsTrigger value="settings">Настройки древа</TabsTrigger>
          </TabsList>

          <TabsContent value="canvas" className="border rounded-lg">
            <div className="h-[calc(100vh-300px)] min-h-[500px]">
              {persons.length > 0 ? (
                <TreeCanvas
                  persons={persons}
                  onSelectPerson={handleSelectPerson}
                  selectedPersonId={selectedPerson?.id}
                />
              ) : (
                <EmptyTreeState onAddPerson={handleAddPerson} />
              )}
            </div>
          </TabsContent>

          <TabsContent value="details">
            {selectedPerson ? (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <PersonDetailsForm
                    person={selectedPerson}
                    onUpdate={handleUpdatePerson}
                    onRemove={() => handleRemovePerson(selectedPerson.id)}
                    persons={persons}
                  />
                </div>

                <div>
                  <PersonPreview person={selectedPerson} />
                </div>
              </div>
            ) : (
              <div className="text-center p-8">
                <p>Выберите персону в древе для редактирования</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="settings">
            <TreeSettings />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default CreateTree;
