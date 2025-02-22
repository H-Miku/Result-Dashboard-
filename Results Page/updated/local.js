keyName: Election
Value:
{
  "SSG Council Election": {
    "startDate": "2024-12-05",
    "endDate": "2024-12-16",
    "candidates": [
      {
        "name": "kenjie",
        "position": "President",
        "image": "Images/coe.jpg",
        "gender": "Male",
        "partylist": "com e",
        "votes": 4,
        "description": "No description",
        "section": "bscpe 3 day",
        "elected": false
      },
      {
        "name": "bryan",
        "position": "President",
        "image": "Images/SSG.png",
        "gender": "Male",
        "partylist": "com e",
        "votes": 3,
        "description": "No description",
        "section": "bscpe 3 day",
        "elected": false
      },
      {
        "name": "khitsly",
        "position": "Vice President",
        "image": "Images/ICPEP.png",
        "gender": "Male",
        "partylist": "hacker",
        "votes": 3,
        "description": "No description",
        "section": "bscpe 3 day",
        "elected": false
      },
      {
        "name": "harold",
        "position": "Vice President",
        "image": "Images/ES.png",
        "gender": "Male",
        "partylist": "hacker",
        "votes": 2,
        "description": "No description",
        "section": "bscpe 3 day",
        "elected": false
      }
    ],
    "logo": "Images\\SSG.png"
  },
  "Engineering Society Election": {
    "startDate": "2024-12-05",
    "endDate": "2024-12-20",
    "candidates": [],
    "logo": "Images\\ES.png"
  },
  "ICPEP Election": {
    "startDate": "2025-01-02",
    "endDate": "2025-01-11",
    "candidates": [],
    "logo": "Images\\ICPEP.png"
  },
  "bscpe2": {
    "startDate": "2024-12-26",
    "endDate": "2025-01-18",
    "candidates": [],
    "logo": "Images\\ICPEP.png"
  },
  "bulldogan": {
    "startDate": "2025-01-16",
    "endDate": "2025-01-25",
    "candidates": [],
    "logo": "Images\\ES.png"
  },
  "test": {
    "startDate": "2025-02-21",
    "endDate": "2025-02-28",
    "candidates": [
      {
        "name": "asdasd",
        "position": "President",
        "image": "Images/image_2025-02-22_125620362.png",
        "gender": "Male",
        "partylist": "asdsad",
        "votes": 0,
        "description": "asdasdsad",
        "section": "asdasd",
        "elected": false
      }
    ],
    "logo": "Images\\image_2025-02-22_125304885.png"
  }
}

 
 // Storing electionData on local
 localStorage.setItem("election", JSON.stringify(election));
