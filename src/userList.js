

export const createUsers=async(formData)=>{
    try {
        const response = await fetch(`"https://64c3feea67cfdca3b6608abe.mockapi.io/Comments"`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        console.log("POST request successful", data);
        
      } catch (error) {
        console.error("Error making POST request:", error);
      }

};