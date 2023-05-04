var documenterSearchIndex = {"docs":
[{"location":"mathias/#THIS-IS-A-SECOND-TEST","page":"THIS IS A SECOND TEST","title":"THIS IS A SECOND TEST","text":"","category":"section"},{"location":"mathias/","page":"THIS IS A SECOND TEST","title":"THIS IS A SECOND TEST","text":"Is this working ?","category":"page"},{"location":"figure1/","page":"Figure 1","title":"Figure 1","text":"CurrentModule = DellReplicate","category":"page"},{"location":"figure1/#Functions-for-Figure-1.","page":"Figure 1","title":"Functions for Figure 1.","text":"","category":"section"},{"location":"figure1/","page":"Figure 1","title":"Figure 1","text":"This page contains the functions used to generate Figure 1 of Dell (2012).","category":"page"},{"location":"figure1/","page":"Figure 1","title":"Figure 1","text":"","category":"page"},{"location":"figure1/","page":"Figure 1","title":"Figure 1","text":"figure1_visualise\nfigure1_data_cleaner\nread_csv\ngen_vars_fig1!","category":"page"},{"location":"figure1/#DellReplicate.figure1_visualise","page":"Figure 1","title":"DellReplicate.figure1_visualise","text":"figure1_visualise(df::String)\n\nPlots Figure 1 from Dell (2012) by calling the data cleaning function figure1_data_cleaner with the climate_panel_csv.csv dataset. The figure is a combination of 128 line plots (one for each country) showing the temperature range and two scatter plots showing the mean temperature values for the periods 1950-1959 and 1996-2005.\n\n\n\n\n\n","category":"function"},{"location":"figure1/#DellReplicate.figure1_data_cleaner","page":"Figure 1","title":"DellReplicate.figure1_data_cleaner","text":"figure1_data_cleaner()\n\nLoads the climate_panel_csv dataset and reproduces Dell's (2012) makefigure1.do commands. Returns a DataFrame object which can be used by figure1_visualise().\n\n\n\n\n\n","category":"function"},{"location":"figure1/#DellReplicate.read_csv","page":"Figure 1","title":"DellReplicate.read_csv","text":"read_csv(fn::String)\n\nCreates a DataFrame object from a .csv file, where fn is the file name. May only work if ran from a directory where assets if is in the same parent directory. \n\n\n\n\n\n","category":"function"},{"location":"figure1/#DellReplicate.gen_vars_fig1!","page":"Figure 1","title":"DellReplicate.gen_vars_fig1!","text":"gen_vars_fig1!(df::DataFrame)\n\nGenerates the necessary mean temperature and precipiation variables for the two graphs of Figure 1, given the climate panel data. Returns the modified version of input df.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = DellReplicate","category":"page"},{"location":"#DellReplicate.jl","page":"Home","title":"DellReplicate.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DellReplicate.","category":"page"},{"location":"table1/","page":"Table 1","title":"Table 1","text":"CurrentModule = DellReplicate","category":"page"},{"location":"table1/#Functions-for-table-1.","page":"Table 1","title":"Functions for table 1.","text":"","category":"section"},{"location":"table1/","page":"Table 1","title":"Table 1","text":"This page contains the specific functions used to create Table 1. Some functions which are common to multiple tables/figures may not be present.","category":"page"},{"location":"table1/","page":"Table 1","title":"Table 1","text":"","category":"page"},{"location":"table1/","page":"Table 1","title":"Table 1","text":"make_table1","category":"page"},{"location":"table1/#DellReplicate.make_table1","page":"Table 1","title":"DellReplicate.make_table1","text":"function make_table_1(raw_df_name::String)\n\nCreate summary statistics of the Data.\n\n\n\n\n\n","category":"function"}]
}