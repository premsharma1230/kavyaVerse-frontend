const fetchPoems = async () => {
  const { data } = await axios.get("http://localhost:5050/api/poems");
  return data;
};

export function usePoems() {
  return useQuery({
    queryKey: ["poems"],
    queryFn: fetchPoems,
  });
}