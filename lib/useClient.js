import { dataset, projectId } from "@/sanity.cli";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
});

function useClient() {
  return client;
}

export default useClient;
