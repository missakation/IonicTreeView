# Project Title

Ionic Tree View

## Getting Started

Clone the project https://github.com/missakation/IonicTreeView.git

### Prerequisites

The project has been built with Ionic 3 and Angular 5

## 

There is a component called ResourceTree in a file names ResourceTree.ts.

From any page just call it like 

'''
<resource-tree-view [TreeData]="Family" [hasCheckbox]="true"></resource-tree-view>
'''

TreeData should have this structure

'''
this.Family = [{
      FileName: "GrandFather",
      Checked: false,
      Children: [
        {
          FileName: "Mom",
          Checked: false,

          Children: {
            FileName: "Me",
            Checked: false,
          }
        },
        {
          FileName: "Dad",
          Checked: false,
        }
      ]
    }]
  }
  '''

## Authors

* **Missak Boyajian** missakboya@live.com

## Acknowledgments
